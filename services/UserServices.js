import { API_USER_URL } from '~/constants/api.constants';
import { httpRequest, httpRequestAuth } from '~/helpers/httpRequest';

class UserService {
  constructor(ctx) {
    this.ctx = ctx;
    this.serviceApi = httpRequest(ctx, API_USER_URL).serviceApi;
    this.serviceApiAuth = httpRequestAuth(ctx, API_USER_URL).serviceApi;
  }

  register({ name, email, password, phoneNumber }) {
    return this.serviceApi.post('/customer/register', {
      name,
      email,
      password,
      phoneNumber,
    });
  }

  updatePassword(token, password) {
    return this.serviceApiAuth.patch('/customer/password', { token, password });
  }

  sendUpdatePasswordEmail(email) {
    return this.serviceApiAuth.post('/customer/email/reset-password', {
      email,
    });
  }

  resendVerificationEmail(email) {
    return this.serviceApi.post('/customer/email/verification', { email });
  }

  verifyEmailToken(token, userUid) {
    return this.serviceApi.post('/customer/verify', { token, userUid });
  }

  sendForgotPasswordEmail(email) {
    return this.serviceApi.post('/customer/email/forget-password', { email });
  }

  updateForgettedPassword(param) {
    return this.serviceApi.patch('/customer/verify/forget-password', {
      ...param,
    });
  }
}

export default UserService;
