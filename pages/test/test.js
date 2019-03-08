// pages/test/test.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      text: '第一个'
    }, {
      text: '第二个'
    }, {
      text: '第三个'
    }, {
      text: '第四个'
    }, {
      text: '第五个'
    }],

    x: 0,
    y: 0,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'color: red;'
      },
      children: [{
        name: 'h1',
        attrs: {
          style: 'font-weight: 500;font-size: 18px;'
        },
        children: [{
          name: 'a',
          attrs: {
            style: 'border: 1px solid red;color: blue'
          },
          children: [{
            type: 'text',
            text: '标题的标签'
          }]
        }]
      }, {
        name: 'p',
        attrs: {
          style: 'color: blue'
        },
        children: [{
          type: 'text',
          text: '段落标签'
        }]
      }]
    }],
    nodes1: [{
      name: 'ul',
      attrs: {
        class: 'item',
        style: 'border: 1px solid blue;margin: 0;padding: 0;list-style: none;display: flex;'
      },
      children: [{
        name: 'li',
        attrs: {
          class: 'item__list',
          style: 'width: 100px'
        },
        children: [{
          type: 'text',
          text: '列表1'
        }]
      }, {
        name: 'li',
        attrs: {
          class: 'item__list',
          style: 'width: 100px'
        },
        children: [{
          type: 'text',
          text: '列表2'
        }]
      }, {
        name: 'li',
        attrs: {
          class: 'item__list',
          style: 'width: 100px'
        },
        children: [{
          type: 'text',
          text: '列表3'
        }]
      }]
    }],
    loading: false,
    checkboxItems: [{
      value: '兰州',
      name: 'LZ'
    }, {
      value: '长沙',
      name: 'CS',
      checked: true
    }, {
      value: '重庆',
      name: 'CQ'
    }],
    hidden: false
  },

  upper: function(e) {
    console.log('滚动到顶部执行')
  },
  lower: function() {
    console.log('滚动到底部执行')
  },

  tap: function(e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  onChange: function(e) {
    console.log(e.detail)
  },
  onScale: function(e) {
    console.log(e.detail)
  },
  btn: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  checkboxChange: function(e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true
      } else {
        changed['checkboxItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    // wx.showNavigationBarLoading()
    console.log(2)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 2000)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})