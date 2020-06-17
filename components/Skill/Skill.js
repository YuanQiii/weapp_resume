// components/Skill/Skill.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLight: {
      type: Boolean,
      default: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    skills: {
      "熟悉HTML&CSS": "W3C规范、开发调试、常见布局、盒模型、flex、响应式布局等",
      "熟悉JavaScript": "常见效果、事件模型、DOM操作、ajax、闭包、原型链、面向对象编程等",
      "熟悉Vue": "组件通信、生命周期、vue-router、vuex等",
      "熟悉webpack": "基本配置和使用",
      "熟悉微信小程序开发": "事件传值、基本组件、生命周期",
      "掌握MySQL": "增删改查等",
      "掌握Git": "托管项目代码",
      "掌握Python": "基本语法",
      "掌握Django REST framework 框架": "GET，POST，PUT、DELETE基本请求",
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
