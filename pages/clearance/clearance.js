Page({
  data: {
    current: 0
  },
  test: function (e) {
    this.setData({
      current: e.detail
    })
  },
  onLoad: function () {
   
  }
})
