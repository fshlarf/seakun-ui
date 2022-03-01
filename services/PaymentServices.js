import { API_PAYMENT_URL } from '~/constants/api.constants.js';
import httpRequest from '~/helpers/httpRequest.js';

class PaymentServices {
  constructor(ctx) {
    this.ctx = ctx;
    this.serviceApi = httpRequest(ctx, API_PAYMENT_URL).serviceApi;
  }

  createInvoice(params) {
    return this.serviceApi.post('/customer/checkout', { ...params });
  }
}

export default PaymentServices;
