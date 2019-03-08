Component({

  data: {
    footer: [],
    current: 0
  },
  attached() {
    this.setData({
      footer: getApp().globalData.footer,
      current: getApp().globalData.current
    })
  },
  methods: {
    changeNavbar: function (e) {
      this.setData({
        current: e.currentTarget.dataset.index
      })
    }
  }
})
