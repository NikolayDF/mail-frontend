import { defineStore } from 'pinia'

export const useSendMailStore = defineStore('sendMail', {
  state: () => {
    return {
      mailData: [
        {
          title: 'Я Отправил',
          message: 'ddddd',
          id: 10,
        },
        {
          title: 'Отправил Отправил',
          message: 'ddddd',
          id: 20,
        },
        {
          title: 'Письма Отправил',
          message: 'ddddd Отправил',
          id: 30,
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
