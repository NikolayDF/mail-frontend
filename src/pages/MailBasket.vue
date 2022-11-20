<template>
  <q-page class="flex">
    <q-scroll-area style="width: 100%;">
      <MailComponent v-for="mailItem in mail.mailData" :key="mailItem.id" v-bind="mailItem" :deleteMail="deleteMail" />
      <q-scroll-observer />
    </q-scroll-area>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue';
import { useBasketMailStore } from 'stores/basketMail';
import MailComponent from 'components/MailComponent.vue';

export default defineComponent({
  name: 'MailBasket',

  components: {
    MailComponent,
  },
  methods: {
    deleteMail(id) {
      this.mail.delete(id);
    }
  },
  setup() {
    const mail = useBasketMailStore();
    return { mail };
  }
})
</script>

