import moment from 'moment';

export const setToken = (ctx, { accessToken, refreshToken, exp }) => {
  try {
    moment.locale('id');
    const dateExpires = moment().add(exp, 'second');
    ctx.$cookies.set('ATS', accessToken, {
      path: '/',
      maxAge: 3600 * 24 * 90,
    });

    ctx.$cookies.set('RTS', refreshToken, {
      path: '/',
      maxAge: 3600 * 24 * 90,
    });

    ctx.$cookies.set('ETS', dateExpires.toISOString(), {
      path: '/',
      maxAge: 3600 * 24 * 90,
    });
  } catch (error) {
    console.log(error);
  }
};
export const removeToken = (ctx) => {
  ctx.$cookies.remove('ATS');
  ctx.$cookies.remove('RTS');
  ctx.$cookies.remove('ETS');
  ctx.$cookies.remove('uid');
  ctx.$cookies.remove('customerUid');
  ctx.$cookies.remove('avatar');
};

export const setUid = (ctx, uid) => {
  try {
    ctx.$cookies.set('uid', uid, {
      path: '/',
      maxAge: 3600 * 24 * 90,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setUsername = (ctx, username) => {
  try {
    ctx.$cookies.set('username', username, {
      path: '/',
      maxAge: 3600 * 24 * 90,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCustomerUid = (ctx, customerUid) => {
  try {
    ctx.$cookies.set('customerUid', customerUid, {
      path: '/',
      maxAge: 3600 * 24 * 90,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setAvatar = (ctx, avatar) => {
  try {
    ctx.$cookies.set('avatar', avatar, {
      path: '/',
      maxAge: 3600 * 24 * 90,
    });
  } catch (error) {
    console.log(error);
  }
};
