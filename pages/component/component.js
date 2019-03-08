Component({
  properties: {
    test: {
      type: Number,
      value: 0,
      observer(e) {
        this.test(e)
      }
    },
  },
  data: {
    list: ['hello world', '你好世界'],
    active: 0
  },
  created() {

  },
  attached() {
    
  },
  ready() {},
  methods: {
    change: function(e) {
      console.log(e)
      this.setData({
        active: e.currentTarget.dataset.index
      })
      this.trigger();
    },
    trigger() {
      let myEventOption = {
        bubbles: false,
        composed: false,
        capturePhase: false
      }
      this.triggerEvent('ginseng', this.data.active, myEventOption)
    },
    test(e){
      this.setData({
        active: e
      })
    }
  }
})