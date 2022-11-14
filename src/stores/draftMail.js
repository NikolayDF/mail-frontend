import { defineStore } from 'pinia'

export const useDraftMailStore = defineStore('draftMail', {
  state: () => {
    return {
      mailData: [
        {
          title: 'Я Отправил',
          message: 'ddddd draft',
          id: '1',
        },
        {
          title: 'Отправил Отправил',
          message: 'ddddd draft',
          id: '2',
        },
        {
          title: 'Письма Отправил',
          message: 'ddddd Отправил draft',
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

