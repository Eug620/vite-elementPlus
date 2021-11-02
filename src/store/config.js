import { defineStore } from 'pinia'

export const useConfigStore = defineStore({
  id: 'SystemConfig',
  state: () => ({
    headerHeight: 100,
    defaultColor: '#fff',
    scrollColor: '#fff'
  }),
  getters: {
    getHeaderHeight() {
      return this.headerHeight;
    },
    getDefaultColor() {
      return this.defaultColor;
    },
    getScrollColor() {
      return this.scrollColor;
    }
  },
  actions: {
    updateSystemConfig({type, value})  {
      this[type] = value;
    }
  }
})
