<template>
  <q-page class="flex flex-start justify-end">
    <div class="col-md-auto" style="width: 100%">
      <MailComponent v-for="mailItem in mail.mailData" :key="mailItem.id" v-bind="mailItem" :deleteMail="deleteMail" />
    </div>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue'
import { useBasketMailStore } from 'stores/basketMail'
import MailComponent from 'components/MailComponent.vue'

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

