import { defineStore } from 'pinia'

export const useJueJinStore = defineStore({
  id: 'JueJinStore',
  state: () => ({
    navigationHeight: 60,
    navigationOptions: ['首页', '沸点', '资讯', '小册', '活动', '开发者大会'],
    classificationHeight: 45,
    classificationOptions:['推荐', '关注', '后端', '前端', 'Android', 'iOS', '人工智能', '开发工具', '代码人生', '阅读'],
    layoutWidth: 960,
    articleTypes: [
      {
        type: 'hot',
        title: '热门'
      },
      {
        type: 'new',
        title: '最新'
      },
      {
        type: 'hottest',
        title: '热榜'
      }
    ]
  }),
  getters: {
    getNavigationHeight() {
      return this.navigationHeight;
    },
    getNavigationOptions() {
      return this.navigationOptions;
    },
    getClassificationHeight() {
      return this.classificationHeight;
    },
    getClassificationOptions() {
      return this.classificationOptions;
    },
    getTopHeight() {
      return this.navigationHeight + this.classificationHeight;
    },
    getLayoutWidth() {
      return this.layoutWidth;
    },
    getArticleType() {
      return this.articleTypes;
    }
  },
  actions: {
    updateJueJinStore({type, value})  {
      this[type] = value;
    }
  }
})
