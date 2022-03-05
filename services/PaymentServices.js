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

  createPaymentConfirmation(params, header) {
    return this.serviceApi.post('/customer/manual-confirm', params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}

export default PaymentServices;
