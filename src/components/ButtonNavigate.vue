<template>
  <q-btn :to=address style="width: 100%">
    <q-icon :name="icon" />
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    address: {
      type: String,
      default: '/'
    },
    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
