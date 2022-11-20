<template>
  <q-card :draggable=pathBoolBasket @dragstart="startDrag($event, id)" @dragend="endDrag"
    class="mail my-card text-black cursor-pointer">
    <q-card-section class="full-width row no-wrap justify-between items-center content-start ">
      <div class="text-h6 col-2">{{ theme }}</div>
      <div class="text-subtitle2 col">{{ message }}</div>
      <q-btn v-on:click="deleteMail(id)" icon="delete" class="col-1" round style="width: 50px; height: 50px;" />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router';

import { useDragADropStore } from '../stores/dragAdrop.js';

export default defineComponent({
  name: 'MailComponent',
  props: {
    theme: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
    },
    deleteMail: {
      type: Function,
    },
  },
  methods: {
    startDrag(evt, id) {
      this.styleDragADropStore.changeState();
      evt.dataTransfer.dropEffect = 'move';
      evt.dataTransfer.effectAllowed = 'move';
      evt.dataTransfer.setData('itemID', id);
    },
    endDrag() {
      this.styleDragADropStore.changeState();
    },
  },
  setup() {
    const styleDragADropStore = useDragADropStore();

    const route = useRoute();
    const pathBoolBasket = computed(() => { // отключаем Drag and Drop
      if (route.path !== '/basket') {
        return true;
      }
      else {
        return false;
      }
    })
    return {
      pathBoolBasket,
      styleDragADropStore,
    }
  }
})
</script>

<style lang="scss">
.mail {
  margin: 5px 5px 0;
  background: white;
}

.mail:first-of-type {
  margin-top: 0;
}
</style>
