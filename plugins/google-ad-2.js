export default ({ app }) => {
  // Include the Google Tag Manager script
  (function () {
    let script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16575712860';
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'AW-16575712860');
    };
  })();
};
