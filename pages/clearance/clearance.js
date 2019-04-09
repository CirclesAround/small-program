const clearanceApi = require('clearanceApi.js')
Page({
  data: {
    current: 0
  },
  changeCurrent: function (e) {
    this.setData({
      current: e.detail
    })
  },
  onLoad: function () {
   
  }
})
