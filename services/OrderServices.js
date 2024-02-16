import { API_ORDER_URL } from '~/constants/api.constants.js';
import { httpRequest, httpRequestAuth } from '~/helpers/httpRequest.js';

class OrderService {
  constructor(ctx) {
    this.ctx = ctx;
    this.serviceApi = httpRequest(ctx, API_ORDER_URL).serviceApi;
    this.serviceApiAuth = httpRequestAuth(ctx, API_ORDER_URL).serviceApi;
  }

  getCustomerOrders(params) {
    return this.serviceApiAuth.get('/customer', { params });
  }

  getDetailOrder(orderUid, customerUid) {
    return this.serviceApi.get(
      `/customer/detail?orderUid=${orderUid}&customerUid=${customerUid}`
    );
  }

  getMultipleOrder(orderUid) {
    return this.serviceApi.get(`/customer/details?orderUid=${orderUid}`);
  }

  createOrder(params) {
    return this.serviceApiAuth.post(
      '/customer',
      { ...params },
      { timeout: 20000 }
    );
  }

  getPaymentConfirmation(orderUid, customerUid, additionalOrder) {
    return this.serviceApi.get(
      `/customer/payment/confirm?orderUid=${orderUid}&customerUid=${customerUid}&additionalOrder=${additionalOrder}`
    );
  }

  getCheckoutData(orderUid, customerUid) {
    return this.serviceApi.get(
      `/customer/payment/checkout?orderUid=${orderUid}&customerUid=${customerUid}`
    );
  }

  updatePaymentConfirmation(params, header) {
    return this.serviceApi.post('/customer/payment/confirm', params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  changePackageVariant(params) {
    return this.serviceApi.patch('/customer/variant', { ...params });
  }

  updateOrderNotes(params) {
    return this.serviceApi.patch('/customer/notes', { ...params });
  }

  getPackageOrderDetails(uid) {
    return this.serviceApiAuth.get(`/customer/${uid}/detail`);
  }
}

export default OrderService;
