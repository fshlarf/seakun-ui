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

  createOrder(params) {
    return this.serviceApi.post('/customer', { ...params });
  }

  getSeakunPayment(params) {
    return this.serviceApi.get('/customer/seakun-payment', { params });
  }

  getSeakunPaymentFrom(params) {
    return this.serviceApi.get('/customer/seakun-payment-from', { params });
  }
}

export default MasterService;
