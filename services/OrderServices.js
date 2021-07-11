import { API_ORDER_URL } from '~/constants/api.constants.js';
import httpRequest from '~/helpers/httpRequest.js';

class OrderService {
  constructor(ctx) {
    this.ctx = ctx;
    this.serviceApi = httpRequest(ctx, API_ORDER_URL).serviceApi;
  }

  getOrder(params) {
    return this.serviceApi.get('/customer', {
      params,
    });
  }

  createOrder(params) {
    return this.serviceApi.post('/customer', { ...params });
  }

  getPaymentConfirmation(orderUid, customerUid) {
    return this.serviceApi.get(
      `/customer/payment/confirm?orderUid=${orderUid}&customerUid=${customerUid}`
    );
  }

  updatePaymentConfirmation(params, header) {
    return this.serviceApi.post(
      '/customer/payment/confirm',
      { ...params },
      { headers: { header } }
    );
  }
}

export default OrderService;
