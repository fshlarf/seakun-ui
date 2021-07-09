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
    // console.log(API_ORDER_URL);
    return this.serviceApi.post('/customer', { ...params });
  }
}

export default OrderService;
