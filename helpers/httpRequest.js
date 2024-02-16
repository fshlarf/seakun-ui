import axios from 'axios';
import {
  removeToken,
  setToken,
  setAvatar,
  setCustomerUid,
  setUid,
  setUsername,
} from '~/helpers/tokenAuth';
import { API_AUTH_URL } from '~/constants/api.constants';
import Cookies from 'js-cookie';

// import Router from 'next/router'

export const httpRequest = function (context, url) {
  const CancelToken = axios.CancelToken;
  let serviceAbort;
  const API_BASE_CONFIG = {
    baseURL: url,
    timeout: 60000,
    cancelToken: new CancelToken((c) => {
      serviceAbort = c;
    }),
  };
  const serviceApi = axios.create(API_BASE_CONFIG);

  const axiosInterceptorsRequest = (config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  };

  const axiosInterceptorsRequestError = (error) => {
    return Promise.reject(error);
  };

  const axiosInterceptorsResponseSuccess = (response) => {
    return response;
  };

  const axiosInterceptorsResponseError = async (error) => {
    return Promise.reject(error);
  };

  serviceApi.interceptors.response.use(
    axiosInterceptorsResponseSuccess,
    axiosInterceptorsResponseError
  );

  serviceApi.interceptors.request.use(
    axiosInterceptorsRequest,
    axiosInterceptorsRequestError
  );
  return {
    serviceApi,
    serviceAbort,
  };
};

export const httpRequestAuth = function (context, url) {
  const CancelToken = axios.CancelToken;
  let serviceAbort;
  const API_BASE_CONFIG = {
    baseURL: url,
    timeout: 60000,
    cancelToken: new CancelToken((c) => {
      serviceAbort = c;
    }),
  };
  const serviceApi = axios.create(API_BASE_CONFIG);

  const axiosInterceptorsRequest = (config) => {
    config.headers['Content-Type'] = 'application/json';

    const token = context ? context.$cookies.get('ATS') : Cookies.get('ATS');
    if (token) {
      config.headers['Access-Control-Requested-Token'] = token;
    }
    return config;
  };

  const axiosInterceptorsRequestError = (error) => {
    return Promise.reject(error);
  };

  const axiosInterceptorsResponseSuccess = (response) => {
    return response;
  };

  const axiosInterceptorsResponseError = async (error) => {
    const { config, data, status } = error.response || {};
    if (
      data &&
      status === 401 &&
      !config._retry &&
      config.url !== '/customer/sign/in'
    ) {
      // check token is changed
      if (
        config.headers['Access-Control-Requested-Token'] !==
        context.$cookies.get('ATS')
      ) {
        config.headers[
          'Access-Control-Requested-Token'
        ] = `${context.$cookies.get('ATS')}`;
        config._retry = true;
        return axios(config);
      }

      const rToken = context ? context.$cookies.get('RTS') : Cookies.get('RTS');
      const getRefreshToken = await fetchRefreshToken(rToken);
      if (getRefreshToken) {
        setToken(context || { $cookies: Cookies }, getRefreshToken);
        config.headers[
          'Access-Control-Requested-Token'
        ] = `${getRefreshToken.accessToken}`;
        config._retry = true;
        return axios(config);
      } else {
        removeToken(context);
        window.location.replace('/login');
      }
    }

    return Promise.reject(error);
  };

  serviceApi.interceptors.response.use(
    axiosInterceptorsResponseSuccess,
    axiosInterceptorsResponseError
  );

  serviceApi.interceptors.request.use(
    axiosInterceptorsRequest,
    axiosInterceptorsRequestError
  );

  return {
    serviceApi,
    serviceAbort,
  };
};

const fetchRefreshToken = async (refreshToken) => {
  try {
    const gerRefreshToken = await axios.get(
      API_AUTH_URL + '/customer/token/refresh',
      {
        headers: {
          'Access-Control-Requested-Rtoken': `${refreshToken}`,
        },
      }
    );
    if (gerRefreshToken.data?.data) {
      return gerRefreshToken.data?.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const authorizeWebview = async (ctx, atoken) => {
  try {
    const getWebviewToken = await axios.get(
      API_AUTH_URL + '/customer/token/webview',
      {
        headers: {
          'Access-Control-Requested-Token': `${atoken}`,
        },
      }
    );
    if (getWebviewToken.data?.data) {
      const auth = getWebviewToken.data?.data;
      setToken(ctx, auth);
      setUid(ctx, auth.uid);
      setAvatar(ctx, auth.avatar);
      setCustomerUid(ctx, auth.customerUid);
      setUsername(ctx, auth.username);
    }
  } catch (error) {
    console.error(error);
  }
};
