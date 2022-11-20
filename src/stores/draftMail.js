import { defineStore } from 'pinia'

export const useDraftMailStore = defineStore('draftMail', {
  state: () => {
    return {
      mailData: [
        {
          title: 'Я Отправил',
          message: 'ddddd draft',
          id: 123,
        },
        {
          title: 'Отправил Отправил',
          message: 'ddddd draft',
          id: 223,
        },
        {
          title: 'Письма Отправил',
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

