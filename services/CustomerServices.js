import { API_CUSTOMER_URL } from '~/constants/api.constants';
import { httpRequestAuth, httpRequest } from '~/helpers/httpRequest';

class CustomerService {
  constructor(ctx) {
    this.ctx = ctx;
    this.serviceApi = httpRequest(ctx, API_CUSTOMER_URL).serviceApi;
    this.serviceApiAuth = httpRequestAuth(ctx, API_CUSTOMER_URL).serviceApi;
  }

  getCustomerByUid() {
    return this.serviceApiAuth.get('/customer');
  }
}

export default CustomerService;
