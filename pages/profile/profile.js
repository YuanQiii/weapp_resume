Page({
  data: {
    list: ['个人信息', '项目经历', '专业技能'],
    currentIndex: 0,
    index: 0,
    status: false,
    isLight: true
  },

  navChange(e) {
    let currentIndex = e.currentTarget.dataset.operation
    this.setData({
      currentIndex
    })
  },

  swiperChange(e) {
    let currentIndex = e.detail.current
    console.log(currentIndex);
    this.setData({
      currentIndex
    })
  },

  navIconChange(e){
    let currentStatus = e.currentTarget.dataset.operation
    this.setData({
      status: !currentStatus
    })
  },

  themeChange(){
    this.setData({
      isLight: !this.data.isLight
    })
  }
})