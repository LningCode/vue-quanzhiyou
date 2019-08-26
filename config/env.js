const env = process.env.NODE_ENV;
const configEnv = {
    'development': developmentEnv,
    'production': productionEnv
}
module.exports = configEnv[env]();

// 开发环境
function developmentEnv(){
    return {
        domain: 'localhost:8081',
        APIHost: 'localhost:8081',
        ImgHost: 'localhost:8081'
    }
}

// 生产环境
function productionEnv(){
    return {
        domain: 'localhost:8081',
        APIHost: 'localhost:8081',
        ImgHost: 'localhost:8081'
    }
}