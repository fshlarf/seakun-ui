import { API_MASTER_URL } from '~/constants/api.constants.js';
import httpRequest from '~/helpers/httpRequest.js';

class SekeranjangService {
  constructor(ctx) {
    this.ctx = ctx;
    this.serviceApi = httpRequest(ctx, API_MASTER_URL).serviceApi;
  }

  getProducts(params) {
    return this.serviceApi.get('/customer/sekeranjang/product', { params });
  }

  getProductByUid(uid) {
    return this.serviceApi.get(
      `/customer/sekeranjang/product/detail?sekeranjangUid=${uid}`
    );
  }

  createProduct(params) {
    return this.serviceApi.post('/customer/sekeranjang/product', {
      ...params,
    });
  }

  uploadImages(params) {
    return this.serviceApi.post(
      '/customer/sekeranjang/product/images',
      params,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
  }

  createOrder(params) {
    return this.serviceApi.post(
      '/customer/sekeranjang/order',
      {
        ...params,
      },
      { timeout: 20000 }
    );
  }

  getOrderByUid(uid) {
    return this.serviceApi.get(
      `/customer/sekeranjang/order/detail?orderUid=${uid}`
    );
  }

  updatePaymentConfirmation(params) {
    return this.serviceApi.patch(
      '/customer/sekeranjang/order/payment',
      params,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
  }

  getGroups(params) {
    return this.serviceApi.get('/customer/sekeranjang/group', { params });
  }
}

export default SekeranjangService;
