// server-middleware/x-frame-options.js
export default function (req, res, next) {
  res.setHeader('X-Frame-Options', 'SAMEORIGIN'); // or 'DENY' depending on your requirements
  next();
}
