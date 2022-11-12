<template>
  <q-layout view="hhh lpr fff">
    <q-header class="header">
      <text-h1 class="text-black text-weight-bold">Почтовый клиент</text-h1>
    </q-header>
    <div class="row items-start">
      <q-btn-group class="menu column inline items-start example-container" style="width: 300px; margin-top: 50px;">

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        <q-btn-group push class="menu__footer-button">
          <q-btn text-color="black" push label="Отправить" icon="send" />
          <q-btn text-color="black" push label="Получить" icon="call_received" />
        </q-btn-group>
      </q-btn-group>
      <div class="col-md-auto" style="width: calc(100% - 300px); margin-top: 50px">
        <MailComponent v-for="mail in mailComponent" :key="mail.title" v-bind="mail" />
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import MailComponent from 'components/MailComponent.vue'

const linksList = [
  {
    title: 'Входящие',
    icon: 'email',
  },
  {
    title: 'Отправленные',
    icon: 'mail_outline',
  },
  {
    title: 'Черновики',
    icon: 'chat',
  },
  {
    title: 'Корзина',
    icon: 'folder_delete',
  },
]

const messageList = [
  {
    title: 'Я',
    message: 'ddddd',
  },
  {
    title: 'Отправил',
    message: 'ddddd',
  },
  {
    title: 'Письма',
    message: 'ddddd',
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    MailComponent,
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      mailComponent: messageList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 50px;
  width: 100%;
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
}

.menu {
  position: relative;
  height: 100%;
}

.menu__footer-button {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: calc(100% - 20px);
  margin: 10px;
}
</style>
