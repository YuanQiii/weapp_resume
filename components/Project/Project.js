// components/Project/Project.js
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
    isShow: [false, false, false],
    Ptitle: ['个人博客', '小程序', '其他项目'],
    Pcontent: [{
        "使用技术": "HTML/CSS/JavaScript、Vue、Webpack、Python、Django、Nginx、MySQL",
        "项目源码": "https://github.com/YuanQiii/vue_blog",
        "项目链接": "http://121.199.4.130",
        "项目描述": [
          "1、使用Vue作为主要开发工具，因为数据的双向绑定和声明式编程以及路由模块为开发提供方便",
          "2、使用vue-router库作为路由，与Vue.js深度集成，构建单页面应用更加方便",
          "3、使用axios作为网络请求模块，简单易用、兼容性较好，支持 Promise API可以简化代码，杜绝回调地狱",
          "4、使用Webpack打包工具，因为能够将复杂的项目打包为清晰的项目模块，还可以使用plugin增加拓展性",
          "5、使用Django作为后端，Django自带后台管理系统可以使得专心开发项目，同时使用Django REST framework构建Web API"
        ]
      },
      {
        "使用技术": "HTML/CSS/JavaScript, 微信小程序",
        "项目源码": "https://github.com/YuanQiii/weapp_resume",
        "项目描述": [
          "1、使用Swiper组件，不使用Tabbar组件，为了在获得更好的操作体验同时实现页面跳转",
          "2、使用flex布局，在手机上有更好的显示效果，不会因为屏幕大小而改变布局效果",
          "3、使用黑白两种主题色，可以按需更换颜色"
        ]
      },
      {
        "Ⅰ": "响应式布局",
        "Ⅱ": "axios简易封装",
        "Ⅲ": "date格式化封装",
        "Ⅳ": "瀑布流实现",
        "Ⅴ": "轮播图",
        "项目源码": "https://github.com/YuanQiii/Other-Projects",
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hChange(e){
      console.log(e.currentTarget.dataset.operation);
      let inx = e.currentTarget.dataset.operation
      let showArr = this.data.isShow

      this.setData({
        isShow: showArr.map((element,index) => {
          if(index == inx){
            return !element
          }else {
            return false
          }
        })
      })
    },
  }
})