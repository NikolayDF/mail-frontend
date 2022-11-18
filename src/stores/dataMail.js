import { defineStore } from 'pinia'

export const useDataMailStore = defineStore('dataMail', {
  state: () => {
    return {
      mailData: [
        {
          title: 'Я',
          message: 'ddddd',
          id: '1',
        },
        {
          title: 'Отправил',
          message: 'ddddd',
          id: '2',
        },
        {
          title: 'Письма',
          message: 'ddddd',
          id: '3',
        },
        {
          title: 'Я1',
          message: 'ddddd',
          id: '4',
        },
        {
          title: 'Отправил1',
          message: 'ddddd',
          id: '5',
        },
        {
          title: 'Письма1',
          message: 'ddddd',
          id: '6',
        },
        {
          title: 'Я3',
          message: 'ddddd',
          id: '7',
        },
        {
          title: 'Отправил3',
          message: 'ddddd',
          id: '8',
        },
        {
          title: 'Письма3',
          message: 'ddddd',
          id: '9',
        },
        {
          title: 'Отправил3',
          message: 'ddddd',
          id: '8',
        },
        {
          title: 'Письма3',
          message: 'ddddd',
          id: '9',
        },
        {
          title: 'Отправил3',
          message: 'ddddd',
          id: '10',
        },
        {
          title: 'Письма3',
          message: 'ddddd',
          id: '11',
        },]
    }
  },
  actions: {
    add(mail) {
      this.mailData.push(mail);
    },
    delete(id) {
      this.mailData = this.mailData.filter((mail) => mail.id !== id)
    },
  },
})
