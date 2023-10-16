export default function ({ app, store, redirect }) {
  const accesToken = app.$cookies.get('ATS');
  const refreshToken = app.$cookies.get('RTS');

  if (!accesToken || !refreshToken) {
    // guard wich  one that is not exist
    app.$cookies.removeAll();
    return redirect('/login');
  }
}
