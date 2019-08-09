module.exports = {
    lintOnSave: false,
    devServer: {
      proxy: {
        '/order-service': {
          target: 'http://118.89.18.229:8002',
          // target: 'http://192.168.10.65:10008',
          // target: 'http://118.89.18.229:10008',
          // target: 'http://111.230.150.171:8090',
          pathRewrite: {
            '^/order-service': '/order-service'
          }
        },
        '/weather': {
          target: 'http://111.230.53.166:7077',
          pathRewrite: {
            '^/weather': '/weather'
          }
        },
        '/disp': {
          target: 'http://118.89.18.229:8096',
          pathRewrite: {
            '^/disp': '/disp'
          }
        },
        '/erp': {
          target: 'http://erpn.pagoda.com.cn:7561',
          pathRewrite: {
            '^/erp': '/'
          }
        }
      }
    }
  }
  