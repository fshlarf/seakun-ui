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

  getProviderCategory(params) {
    return this.serviceApi.get('/customer/provider/category', {
      params,
    });
  }

  getVariantByPackageUid(uid) {
    return this.serviceApi.get(`/customer/package/variant?packageUid=${uid}`);
  }

  createOrder(params) {
    return this.serviceApi.post('/customer', { ...params });
  }

  getSeakunPayment(params) {
    return this.serviceApi.get('/customer/seakun-payment', { params });
  }

  getSeakunPaymentFrom(params) {
    return this.serviceApi.get('/customer/seakun-payment-from', { params });
  }

  getAccountGroups(params) {
    return this.serviceApi.get(`/customer/account`, { params });
  }

  getProductService(params) {
    return this.serviceApi.get('/customer/product/service', {
      params,
    });
  }

  getProducts(params) {
    return this.serviceApi.get('/customer/product', { params });
  }

  getProductByUid(uid) {
    return this.serviceApi.get(`/customer/product/detail?productUID=${uid}`);
  }

  createProduct(params) {
    return this.serviceApi.post('/customer/product', {
      ...params,
    });
  }

  uploadPhotos(params) {
    return this.serviceApi.post('/customer/product/photos', params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  getDonations(params) {
    return this.serviceApi.get('/customer/donation', { params });
  }

  addDonation(params) {
    return this.serviceApi.post('/customer/donation', params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}

export default MasterService;
