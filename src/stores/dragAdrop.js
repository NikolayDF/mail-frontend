import { defineStore } from 'pinia'

export const useDragADropStore = defineStore('dragADrop', {
  state: () => {
    return {
      styleBool: false,
    }
  },
  actions: {
    changeState() {
      this.styleBool = !this.styleBool;
    },
  },
})

