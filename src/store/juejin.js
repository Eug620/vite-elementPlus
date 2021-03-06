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
      return this.navigationHeight + 'px';
    },
    getTransformNavigationHeight() {
      return '-' + this.navigationHeight + 'px';
    },
    getClassificationHeight() {
      return this.classificationHeight + 'px';
    },
    getTopHeightSum() {
      return this.navigationHeight + this.classificationHeight;
    },
    getTopHeight() {
      return this.navigationHeight + this.classificationHeight + 'px';
    },
    getLayoutWidth() {
      return this.layoutWidth + 'px';
    }
  },
  actions: {
    updateJueJinStore({type, value})  {
      this[type] = value;
    }
  }
})
