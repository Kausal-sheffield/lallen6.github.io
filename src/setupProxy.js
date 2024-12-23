// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/pdf',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      onProxyRes: function(proxyRes, req, res) {
        proxyRes.headers['Content-Type'] = 'application/pdf';
        proxyRes.headers['Content-Disposition'] = 'inline';
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      },
    })
  );
};