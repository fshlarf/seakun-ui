import { API_AUTH_URL } from '~/constants/api.constants';
import { httpRequestAuth, httpRequest } from '~/helpers/httpRequest';

class AuthService {
  constructor(ctx) {
    this.ctx = ctx;
    this.serviceApi = httpRequest(ctx, API_AUTH_URL).serviceApi;
    this.serviceApiAuth = httpRequestAuth(ctx, API_AUTH_URL).serviceApi;
  }

  login(email, password, deviceOs, deviceId, scope) {
    return this.serviceApi.post('/customer/sign/in', {
      email,
      password,
      deviceOs,
      deviceId,
      scope,
    });
  }

  logout() {
    return this.serviceApiAuth.get('/customer/sign/out');
  }
}

export default AuthService;
