import { API_MASTER_URL } from '~/constants/api.constants.js';
import httpRequest from '~/helpers/httpRequest.js';

class MasterService {
  constructor(ctx) {
    this.ctx = ctx;
    this.serviceApi = httpRequest(ctx, API_MASTER_URL).serviceApi;
  }

  getProvider(params) {
    return this.serviceApi.get('/customer/provider', {
      params,
    });
  }

  getVariantByPackageUid(uid) {
    return this.serviceApi.get(`/customer/package/variant?packageUid=${uid}`);
  }

  getProviderById(uid) {
    return this.serviceApi.get(`/customer/provider/${uid}`);
  }

  createProvider(params) {
    return this.serviceApi.post('/customer/provider', {
      ...params,
      fileIcon: 'sadasdas',
    });
  }

  updateProvider(uid, params) {
    return this.serviceApi.patch(`/customer/provider/${uid}/all`, {
      ...params,
      fileIcon: 'sadasdas',
    });
  }

  deleteProvider(uid) {
    return this.serviceApi.patch(`/customer/provider/${uid}/status`, {
      isActive: 0,
    });
  }

  getPackage(params) {
    return this.serviceApi.get('/customer/package', {
      params,
    });
  }

  getPackageById(uid) {
    return this.serviceApi.get(`/customer/package/${uid}`);
  }

  createPackage(params) {
    return this.serviceApi.post('/customer/package', {
      ...params,
    });
  }

  updatePackage(uid, params) {
    return this.serviceApi.patch(`/customer/package/${uid}/all`, { ...params });
  }

  createOrder(params) {
    return this.serviceApi.post('/customer', { ...params });
  }

  getSeakunPayment(params) {
    return this.serviceApi.get('/customer/seakun-payment', { params });
  }
}

export default MasterService;
