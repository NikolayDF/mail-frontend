import { defineStore } from 'pinia'

export const useInMailStore = defineStore('inMail', {
  state: () => {
    return {
      mailData: [
        {
          theme: 'Я',
          message: 'ddddd',
          id: 1,
        },
        {
          theme: 'Отправил',
          message: 'ddddd',
          id: 2,
        },
        {
          theme: 'Письма',
          message: 'ddddd',
          id: 3,
        },
        {
          theme: 'Я1',
          message: 'ddddd',
          id: 4,
        },]
    }
  },
  actions: {
    get(id) {
      const mailObj = this.mailData.find((mail) => mail.id === id);
      return mailObj;
    },
    add(mail) {
      this.mailData.push(mail);
    },
    delete(id) {
      this.mailData = this.mailData.filter((mail) => mail.id !== id);
    },
  },
})
