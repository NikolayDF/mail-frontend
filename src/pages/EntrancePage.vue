<template>
  <div class="form">
    <h1 class="text-center text-h2 form__title">Регистрация</h1>

    <q-form @submit="onSubmit" @reset="onReset" class="full-width q-px-md">
      <q-input rounded outlined v-model="name" label="Введите логин" hint="Логин" lazy-rules class="q-pt-md"
        :rules="[val => val && val.length > 0 || 'Пожалуйста введите логин']" />

      <q-input rounded outlined v-model="email" label="Введите e-mail" hint="E-mail" lazy-rules class="q-pt-lg"
        :rules="[val => val && val.length > 0 || 'Пожалуйста введите E-mail']" />

      <q-input rounded outlined v-model="password" label="Введите пароль" hint="Пароль" lazy-rules class="q-pt-lg"
        :rules="[val => val && val.length > 0 || 'Пожалуйста введите пароль']" />

      <div class="fit row no-wrap justify-between items-start q-py-lg">
        <q-btn unelevated rounded label="Зарегистрироваться" type="submit" color="primary" class="form__button" />
        <q-btn unelevated rounded label="Очистить форму" type="reset" color="primary" flat class="q-ml-sm form__button" />
      </div>

    </q-form>

    <a class="text-center text-h6 cursor-pointer form__link">Уже зарегистрированы? Войти.</a>
  </div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EntrancePage',
})
</script>

<style scoped lang="scss">
.form {
  width: 600px;
  padding-bottom: 20px;
  background: rgba(255, 255, 255);
  border-radius: 40px;
}

.form__title {
  margin: 0px;
  padding: 20px;
}

.form__button {
  width: 45%;
}

.form__link {
  margin: 0 151px 0;
}
</style>
