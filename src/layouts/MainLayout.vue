<template>
  <q-layout view="hhh lpr fff">
    <q-header class="header ">
      <h1 class="header__title text-black text-weight-bold">Почтовый клиент</h1>
    </q-header>
    <div class="row items-start justify-end">
      <q-btn-group class="menu column inline items-end example-container">
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        <q-btn-group push class="menu__footer-button">
          <q-btn text-color="black" push label="Отправить" icon="send" />
          <q-btn text-color="black" push label="Получить" icon="call_received" />
        </q-btn-group>
      </q-btn-group>
      <div class="col-md-auto" style="width: calc(100% - 300px); margin-top: 50px">
        <MailComponent v-for="mailItem in mail.mailData" :key="mailItem.id" v-bind="mailItem"
          :deleteMail="deleteMail" />
      </div>
    </div>

    <q-page-container>
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
import { useDataMailStore } from 'stores/dataMail'
import EssentialLink from 'src/components/ButtonNavigate.vue'
import MailComponent from 'components/MailComponent.vue'

const linksList = [
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
    EssentialLink,
    MailComponent,
  },
  methods: {
    deleteMail(id) {
      this.mail.delete(id);
    }
  },
  setup() {
    const mail = useDataMailStore();

    return {
      essentialLinks: linksList,
      mail,
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
