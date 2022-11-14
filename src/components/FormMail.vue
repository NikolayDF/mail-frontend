<template>
  <q-form @submit="onSubmit" class="q-gutter-md form hidden">
    <q-input filled v-model="name" label="Кому" lazy-rules></q-input>
    <div class="q-pa-md" filled>
      <q-input v-model="text" filled type="textarea" />
    </div>

    <div>
      <q-btn label="Сохранить" type="button" color="primary"></q-btn>
    </div>
  </q-form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormMail',
})
</script>

<style lang="scss">
.form {
  position: fixed;
  top: calc(50% - 38% + 4%);
  left: calc(50% - 35%);
  width: 70%;
  height: 76%;
  background-color: #3280c4;
  border-radius: 30px;
  z-index: 1;
}
</style>


