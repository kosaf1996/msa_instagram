const { createProxyMiddleware } = require('http-proxy-middleware');


//CORS 인증 해결을 위한 Proxy 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/v1/user/login', {
      target: 'http://localhost:60000',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api/v1/user/signup', {
      target: 'http://localhost:60001',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api/v1/instagram/feed', {
      target: 'http://localhost:3002',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api/v1/instagram/user', {
      target: 'http://localhost:3002',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api/v1/bookmark', {
      target: 'http://localhost:3003',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api/v1/like', {
      target: 'http://localhost:3004',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api/v1/reply', {
      target: 'http://localhost:3005',
      changeOrigin: true,
    }),
  );
};