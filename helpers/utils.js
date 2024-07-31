import Cookies from 'js-cookie';

export function getUserInfo() {
  try {
    const storage = JSON.parse(localStorage.getItem('login_data'));
    const ats = Cookies.get('ATS');
    const uid = Cookies.get('uid');
    const username = Cookies.get('username');
    const { email } = storage;

    return {
      email,
      ats,
      username,
      uid,
    };
  } catch (error) {
    console.log('Error', error);
    return null;
  }
}

export function arrFindAscending(arr) {
  return arr.slice().sort((a, b) => a[key] - b[key]);
}

export function arrFindMaxValue(arr, key) {
  return arr.reduce((max, item) => (item[key] > max[key] ? item : max), arr[0]);
}
