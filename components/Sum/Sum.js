// components/Sum/Sum.js
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
    sum: {
      "良好的自学能力": "能够看视频和文档学习技术",
      "有独立思考能力": "能够独立解决开发过程中的大部分问题",
      "热爱前端行业": "对前端和前端技术有浓厚的兴趣",
      "良好的沟通能力和团队合作精神": "能够与他人友善交流和为团队着想", 
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
