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

  updateCustomer(params) {
    return this.serviceApiAuth.patch('/customer', { ...params });
  }

  // get from all sheet
  // req param query: sheet (string)
  getSefoursaryData(params) {
    return this.serviceApiAuth.get('/customer/sefoursary', { params });
  }

  // api flow:
  // check available prize in sheet HADIAH
  // draw lottery
  // update sheet HADIAH
  // save to sheet UNDIAN
  // save to sheet WIN
  // open next level in sheet USER
  // req body: level (number)
  drawRandomGiftSefoursary(params) {
    return this.serviceApiAuth.post('/customer/sefoursary', { ...params });
  }

  // open next level in sheet USER
  // req body: level (number) (current level)
  openNextLevelSefoursary(params) {
    return this.serviceApiAuth.post('/customer/sefoursary/next-level', {
      ...params,
    });
  }

  // for page approval (done)
  generateUniqueCodeSefoursary(params) {
    return this.serviceApiAuth.post('/customer/sefoursary/unique-code', {
      ...params,
    });
  }

  // for page thankyou (done)
  generateUniqueCodeThankyouSefoursary(params) {
    return this.serviceApiAuth.post(
      '/customer/sefoursary/unique-code/thankyou-page',
      {
        ...params,
      }
    );
  }
}

export default CustomerService;
