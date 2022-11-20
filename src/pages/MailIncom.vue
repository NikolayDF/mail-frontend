<template>
  <q-page class="flex">
    <q-scroll-area style="width: 100%;">
      <MailComponent v-for="mailItem in mail.mailData" :key="mailItem.id" v-bind="mailItem" :deleteMail="deleteMail" />
      <q-scroll-observer />
    </q-scroll-area>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

import MailComponent from 'components/MailComponent.vue'

import { useInMailStore } from 'src/stores/inMail'
import { useBasketMailStore } from 'stores/basketMail';

export default defineComponent({
  name: 'MailIncom',

  components: {
    MailComponent,
  },
  methods: {
    deleteMail(id) {
      const mailObj = this.mail.get(id);
      this.mail.delete(id);
      this.basketMail.add(mailObj);
    }
  },
  setup() {
    const mail = useInMailStore();
    const basketMail = useBasketMailStore();
    return { mail, basketMail }
  }
})
</script>
