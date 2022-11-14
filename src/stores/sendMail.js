import { defineStore } from 'pinia'

export const useSendMailStore = defineStore('sendMail', {
  state: () => {
    return {
      mailData: [
        {
          title: 'Я Отправил',
          message: 'ddddd',
          id: '1',
        },
        {
          title: 'Отправил Отправил',
          message: 'ddddd',
          id: '2',
        },
        {
          title: 'Письма Отправил',
          message: 'ddddd Отправил',
          id: '3',
        },
        {
          title: 'Я1',
          message: 'ddddd Отправил',
          id: '4',
        },
        {
          title: 'Отправил1',
          message: 'ddddd',
          id: '5',
        },
        {
          title: 'Письма1 Отправил',
          message: 'ddddd Отправил',
          id: '6',
        },
        {
          title: 'Я3 Отправил',
          message: 'ddddd Отправил',
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
