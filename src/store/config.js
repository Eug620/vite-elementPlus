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
      return this.headerHeight + 'px';
    },
    getTranstionTop() {
      return '-' + this.headerHeight + 'px';
    }
  },
  actions: {
    updateSystemConfig({type, value})  {
      this[type] = value;
    }
  }
})
