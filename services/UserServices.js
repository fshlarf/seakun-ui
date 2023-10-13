import { API_USER_URL } from '~/constants/api.constants';
import { httpRequest } from '~/helpers/httpRequest';

class UserService {
  constructor(ctx) {
    this.ctx = ctx;
    this.serviceApi = httpRequest(ctx, API_USER_URL).serviceApi;
  }

  register({ name, email, password, phoneNumber }) {
    return this.serviceApi.post('/customer/register', {
      name,
      email,
      password,
      phoneNumber,
    });
  }

  logout() {
    return this.serviceApi.get('/customer/sign/out');
  }
}

export default UserService;
