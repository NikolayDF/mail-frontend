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

import { useDraftMailStore } from 'src/stores/draftMail'
import { useBasketMailStore } from 'stores/basketMail';

import { api } from '../utils/Api';

export default defineComponent({
  name: 'MailDraft',

  components: {
    MailComponent,
  },
  methods: {
    deleteMail(id) {
      const mailObj = this.mail.get(id);
      api.postMailDelite(mailObj, '/draft')
        .then((res) => {
          this.basketMail.add(mailObj);
          this.mail.delete(id);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  setup() {
    const mail = useDraftMailStore();
    const basketMail = useBasketMailStore();
    return { mail, basketMail }
  }
})
</script>

