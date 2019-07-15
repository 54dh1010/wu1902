module.exports = {
    publicPath: "",  // 公共路径

    devServer: {
        host: "localhost",
        port: 8080,
        open: true,   // 自动打开浏览器 
        proxy: {  // 反向代理 
            "/vue": {
                target: "http://47.102.135.185:3000",
                changeOrigin: true,
            },
        }
    }

}