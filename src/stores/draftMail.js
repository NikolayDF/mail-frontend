import { defineStore } from 'pinia'

export const useDraftMailStore = defineStore('draftMail', {
  state: () => {
    return {
      mailData: []
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
    addArray(mailArray) {
      this.mailData.push(...mailArray);
    },
    delete(id) {
      this.mailData = this.mailData.filter((mail) => mail.id !== id)
    },
    deleteAll() {
      this.mailData = [];
    },
  },
})

