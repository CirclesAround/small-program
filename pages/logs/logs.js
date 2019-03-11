//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    current: 0
  },
  test: function (e) {
    this.setData({
      current: e.detail
    })
  },
  onLoad: function (options) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      current: options.current
    })
  }
})
