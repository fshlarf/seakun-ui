import axios from 'axios';

// import Router from 'next/router'

const httpRequest = function (context, url) {
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

// const fetchRefreshToken = async (refreshToken) => {
//   try {
//     const gerRefreshToken = await axios.get(API_AUTH_URL + '/user/token/refresh', {
//       headers: {
//         'Access-Control-Requested-Rtoken': `${refreshToken}`
//       }
//     })
//     if (gerRefreshToken.data?.data) {
//       return gerRefreshToken.data?.data
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }

export default httpRequest;
