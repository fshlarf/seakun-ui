import moment from 'moment';

export const setToken = (ctx, { accessToken, refreshToken, exp }) => {
  try {
    moment.locale('id');
    const dateExpires = moment().add(exp, 'second');
    ctx.$cookies.set('ATS', accessToken, {
      path: '/',
      maxAge: 3600 * 24 * 2,
    });

    ctx.$cookies.set('RTS', refreshToken, {
      path: '/',
      maxAge: 3600 * 24 * 2,
    });

    ctx.$cookies.set('ETS', dateExpires.toISOString(), {
      path: '/',
      maxAge: 3600 * 24 * 2,
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
};

export const setUid = (ctx, uid) => {
  try {
    ctx.$cookies.set('uid', uid, {
      path: '/',
      maxAge: 3600 * 24 * 2,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setUsername = (ctx, username) => {
  try {
    ctx.$cookies.set('username', username, {
      path: '/',
      maxAge: 3600 * 24 * 2,
    });
  } catch (error) {
    console.log(error);
  }
};
