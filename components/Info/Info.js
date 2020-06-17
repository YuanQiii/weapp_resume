
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLight: {
      type: Boolean,
      default: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    infos: {
      name: '姓名：袁湫 & 年龄：22 & 性别：男',
      github: 'GitHub：https://github.com/YuanQiii',
      phone: '电话：18908077873',
      email: '邮箱：jyuan1584@gmail.com',
      wechat: '微信：18908077873',
      qq: 'QQ：934024048'
    },
    mine: ['基本信息', '个人总结'],
    isShow: [true, false]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    heightChange(e){
      let inx = e.currentTarget.dataset.operation
      let isShowArr = this.data.isShow
      this.setData({
        isShow:  isShowArr.map((ele, index) => {
          if(index == inx){
            return !ele
          }else {
            return ele
          }
        }) 
      })
    }
  },

})

