/*
* @Date 2020/10/27
* @Author shiYaFan
* @Description webpack 配置
*/
module.exports = {
    lintOnSave: false, // 关闭eslint
    runtimeCompiler: true,
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        open: true,
        port: 8090,
        host: '127.0.0.1',
        proxy: {
            '/api/*': {
                target: `http://localhost:1601/api`,  // 接口域名
                changeOrigin: true,
                pathRewrite: {'^/api': ''},
                secure: false
            },
        },
        disableHostCheck: true
    },
    configureWebpack: {
        plugins: []
    }
}
