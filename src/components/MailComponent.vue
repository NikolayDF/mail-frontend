<template>
  <q-card class="my-card text-black" style="background: white; margin: 5px 5px 0;">
    <q-card-section class="full-width row no-wrap justify-between items-center content-start ">
      <div class="text-h6 col-2">{{ title }}</div>
      <div class="text-subtitle2 col">{{ message }}</div>
      <q-icon name="delete" class="col-1" />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MailComponent',
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
  }
})
</script>
