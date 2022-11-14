<template>
  <q-card :id=id draggable="true" @dragstart="startDrag($event, id)" class="my-card text-black"
    style="background: white; margin: 5px 5px 0;">
    <q-card-section class="full-width row no-wrap justify-between items-center content-start ">
      <div class="text-h6 col-2">{{ title }}</div>
      <div class="text-subtitle2 col">{{ message }}</div>
      <q-btn v-on:click="deleteMail(id)" icon="delete" class="col-1" />
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
    id: {
      type: String,
    },
    deleteMail: {
      type: Function,
    },
  },
  methods: {
    startDrag(evt, id) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', id)
    },
  },
  setup() {
    return {
    }
  }
})
</script>
