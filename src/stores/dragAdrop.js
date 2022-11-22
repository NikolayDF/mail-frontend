import { defineStore } from 'pinia'

export const useDragADropStore = defineStore('dragADrop', { // используется для изменения стиля дроп элмента
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

