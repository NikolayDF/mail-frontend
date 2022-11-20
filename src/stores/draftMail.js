import { defineStore } from 'pinia'

export const useDraftMailStore = defineStore('draftMail', {
  state: () => {
    return {
      mailData: [
        {
          theme: 'Я Отправил',
          message: 'ddddd draft',
          id: 123,
        },
        {
          theme: 'Отправил Отправил',
          message: 'ddddd draft',
          id: 223,
        },
        {
          theme: 'Письма Отправил',
          message: 'ddddd Отправил draft',
          id: 323,
        },]
    }
  },
  actions: {
    get(id) {
      const mailObj = this.mailData.find((mail) => mail.id == String(id));
      return mailObj;
    },
    add(mail) {
      this.mailData.push(mail);
    },
    delete(id) {
      this.mailData = this.mailData.filter((mail) => mail.id !== id)
    },
  },
})

