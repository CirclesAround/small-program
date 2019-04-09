import damain from '../../config.js'
export function test () {
  wx.request({
    url: damain.getAPI(films),
    method: 'GET',
    header: { 'content-type': 'application/json'},
    data:{
      key: '08f9183c039719ee6622a9b58daccab2',
      q: '绿皮书'
    },
    success: res => {
      console.log(res)
    },
    fail: () => {
      console.log('请求失败')
    }
  })
}