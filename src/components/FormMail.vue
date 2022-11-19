<template>
  <div :class="[popupOpen ? 'popup popup_open' : 'popup']">
    <q-form class="q-gutter-md form">
      <q-input filled label="Кому" lazy-rules style="width: 97%;"></q-input>
      <div class="q-pa-md" filled>
        <q-input filled type="textarea" />
      </div>
      <q-btn-group class="fit  justify-between push square" style="box-shadow: none; width: 97% !important">
        <q-btn class="form__button" label="Закрыть" type="button" color="grey-8" v-on:click="$emit('popup-close')">
        </q-btn>
        <q-btn class="form__button" label="Сохранить" type="button" color="grey-8"></q-btn>
      </q-btn-group>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormMail',
  props: {
    popupOpen: {
      type: Boolean,
      default: false,
    }
  }
})
</script>

<style scoped lang="scss">
.form {
  position: fixed;
  top: calc(50% - 38% + 4%);
  left: calc(50% - 35%);
  width: 70%;
  height: 76%;
  background-color: #d7d5d5;
  border-radius: 30px;
}

.form__button {
  height: 30px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  z-index: -2;
  opacity: 0;
}

.popup_open {
  z-index: 2001;
  opacity: 1;
}
</style>


