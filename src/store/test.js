import { defineStore } from 'pinia'

export const useTestStore = defineStore({
  id: 'TestStore',
  state: () => ({
    count: 1
  }),
  getters: {
    getCount() {
      return this.count;
    }
  },
  actions: {
    updateCount() {
      this.count++
    }
  }
})
