const {createProxyMiddleware} = require('http-proxy-middleware');

// /api 로 시작하는 api 의 host 를 변경시키는 프록시 방법
module.exports =  function(app) {
    app.use(
        ['/api', '/auth'],
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true
        })
    );
};