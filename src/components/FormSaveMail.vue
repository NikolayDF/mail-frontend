<template>
  <div :class="[popupOpen ? 'popup popup_open' : 'popup']">
    <q-form class="q-gutter-md form">
      <q-input filled label="Кому" v-model="address" lazy-rules style="width: 97%;"></q-input>
      <q-input filled label="Тема" v-model="theme" lazy-rules style="width: 97%;"></q-input>
      <q-input filled type="textarea" v-model="message" class="form__text" rows="16" />
      <q-btn-group class="fit justify-between push square" style="box-shadow: none; width: 97% !important;">
        <q-btn class="form__button" label="Закрыть" type="button" color="grey-8" v-on:click="$emit('popup-close')">
        </q-btn>
        <!--<q-file rounded outlined v-model="file" label="Rounded outlined" />-->
        <q-btn class="form__button" label="Сохранить" type="button" color="grey-8" @click="saveDraft"
          v-on:click="$emit('popup-close')"></q-btn>
      </q-btn-group>
    </q-form>
  </div>
</template>

<script>

import { defineComponent, reactive, toRefs } from 'vue'

import { useDraftMailStore } from 'src/stores/draftMail'

export default defineComponent({
  name: 'FormMail',
  props: {
    popupOpen: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    saveDraft() {
      const { address, theme, message, id, sender, file, type } = this.draft;
      const newD = {
        address: address,
        theme: theme,
        message: message,
        id: id,
        sender: sender,
        file: file,
        type: type,
      }
      this.draftMail.add(newD);
      this.address = "";
      this.theme = "";
      this.message = "";
      this.id = 33333;
      this.sender = "mail@mail";
      this.file = FileList; // ?
      this.type = "draft";
      console.log(this.draft);
    }
  },
  setup() {
    const draftMail = useDraftMailStore();

    const draft = reactive({
      address: "",
      theme: "",
      message: "",
      id: 33333,
      sender: "mail@mail",
      file: FileList, // ?
      type: "draft",
    });
    const { address, theme, message, id, sender, file, type } = toRefs(draft);
    return { address, theme, message, id, sender, file, type, draft, draftMail, };
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
  height: 55px;
  border-radius: 15px;
}

.form__text {
  margin: 20px auto 50px;
  width: 97%;
  height: 46%;
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


