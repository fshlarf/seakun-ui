// server-middleware/x-frame-options.js
export default function (req, res, next) {
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' https://connect.facebook.net/en_US/fbevents.js 'unsafe-inline' https://platform.twitter.com/widgets.js https://analytics.tiktok.com/i18n/pixel/events.js https://platform.twitter.com/js/tweet.d7aeb21a88e025d2ea5f5431a103f586.js",
    "style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com 'unsafe-inline' https://www.google-analytics.com/analytics.js",
    "img-src 'self' data:;",
    "connect-src 'self' https://syndication.twitter.com/i/jot/embeds https://connect.facebook.net/en_US/fbevents.js https://analytics.tiktok.com/i18n/pixel/events.js https://api-staging.seakun.id https://api.seakun.id",
    "font-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://fonts.gstatic.com",
    "object-src 'self'",
    "media-src 'self'",
    "frame-src 'self' https://platform.twitter.com/ https://syndication.twitter.com/i/jot/embeds",
  ].join('; ');

  res.setHeader('X-Frame-Options', 'SAMEORIGIN'); // or 'DENY' depending on your requirements
  res.setHeader('Content-Security-Policy', cspDirectives);
  next();
}
