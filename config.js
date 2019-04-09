// 接口的域名
const domain = 'http:'
let config = {
  // 接口列表
  api: {
    films: `${domain}//op.juhe.cn/onebox/movie/video`   // 影视接口
  },
  // 获取接口的方法
  getAPI(key) {
    let url
    if(config&&config.api) {
      url = config.api[key]
    }
    return url
  }
}
module.exports = config