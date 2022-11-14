<template>
  <q-layout view="hhh lpr fff">
    <q-header class="header ">
      <h1 class="header__title text-black text-weight-bold">Почтовый клиент</h1>
    </q-header>
    <div class="row items-start justify-end">
      <q-btn-group class="menu column inline items-end example-container">
        <ButtonNavigate v-for="button in buttonList" :key="button.title" v-bind="button" />
        <q-btn-group push class="menu__footer-button">
          <q-btn text-color="black" push label="Отправить" icon="send" />
          <q-btn text-color="black" push label="Получить" icon="call_received" />
        </q-btn-group>
      </q-btn-group>
    </div>

    <q-page-container style="width: calc(100% - 300px); margin-left: auto;">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import ButtonNavigate from 'src/components/ButtonNavigate.vue'

const buttonList = [
  {
    title: 'Входящие',
    icon: 'email',
    address: '/',
  },
  {
    title: 'Отправленные',
    icon: 'mail_outline',
    address: '/send',
  },
  {
    title: 'Черновики',
    icon: 'chat',
    address: '/draft',
  },
  {
    title: 'Корзина',
    icon: 'folder_delete',
    address: '/basket',
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    ButtonNavigate,
  },
  setup() {
    return {
      buttonList,
    }
  }
})
</script>

<style lang="scss">
.header {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
}

.header__title {
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 50px;
}

.menu {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 300px;
  margin-top: 50px;
}

.menu__footer-button {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 290px;
  margin: 5px;
}
</style>
