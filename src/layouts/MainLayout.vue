<template>
  <q-layout view="hhh lpr fff" class="page">
    <q-header class="header">
      <q-btn flat @click="drawerLeft = !drawerLeft" class="menu__button-open" color="black" round dense
        icon="density_medium" />
      <h1 class="header__title text-black text-weight-bold">Почтовый клиент</h1>
    </q-header>
    <q-drawer v-model="drawerLeft" show-if-above bordered persistent :breakpoint="500">
      <q-btn-group class="menu column content-start">
        <q-btn to="/" exact style="width: 100%" :class="[path === '/' ? 'menu__button_active ' : '']">
          <q-icon name="email" />
          <q-item-section>
            <q-item-label>Входящие</q-item-label>
          </q-item-section>
        </q-btn>
        <q-btn to="/send" exact style="width: 100%" :class="[path === '/send' ? 'menu__button_active ' : '']">
          <q-icon name="mail_outline" />
          <q-item-section>
            <q-item-label>Отправленные</q-item-label>
          </q-item-section>
        </q-btn>
        <q-btn to="/draft" exact style="width: 100%" :class="[path === '/draft' ? 'menu__button_active ' : '']">
          <q-icon name="chat" />
          <q-item-section>
            <q-item-label>Черновики</q-item-label>
          </q-item-section>
        </q-btn>
        <q-btn to="/basket" exact style="width: 100%"
          :class="[path === '/basket' ? 'menu__button_active ' : '', styleDragADropStore.styleBool ? 'menu__button_d-a-d-active' : '']"
          @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
          <q-icon name="folder_delete" />
          <q-item-section>
            <q-item-label>Корзина</q-item-label>
          </q-item-section>
        </q-btn>
        <q-btn-group push class="menu__footer-button content-end" style="margin-top: auto;">
          <q-btn text-color="black" push label="Отправить" icon="send" />
          <q-btn text-color="black" push label="Получить" icon="cached" @click="inComeGet" />
        </q-btn-group>
      </q-btn-group>
    </q-drawer>

    <q-btn round @click="popupOpen = !popupOpen" color="grey-6" class="menu__button-new-mail" icon="add" />
    <FormMail :popupOpen="popupOpen" v-on:popup-close="popupClose" />

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

import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import FormMail from 'src/components/FormSaveMail.vue';

import { api } from '../utils/Api';

import { useInMailStore } from 'src/stores/inMail';
import { useSendMailStore } from 'stores/sendMail';
import { useDraftMailStore } from 'stores/draftMail';
import { useBasketMailStore } from 'stores/basketMail';

import { useDragADropStore } from 'src/stores/dragAdrop';

export default defineComponent({
  name: 'MainLayout',

  components: {
    FormMail,
  },
  methods: {
    onDrop(evt) { // дроп реализован только на корзину
      let mailObj = {};
      const itemID = evt.dataTransfer.getData('itemID');
      if (this.path === '/') {
        mailObj = this.inMail.get(Number(itemID));
        this.inMail.delete(Number(itemID));
      }
      else if (this.path === '/send') {
        mailObj = this.sendMail.get(Number(itemID));
        this.sendMail.delete(Number(itemID));
      }
      else if (this.path === '/draft') {
        mailObj = this.draftMail.get(Number(itemID));
        this.draftMail.delete(Number(itemID));
      }
      console.log(mailObj);
      this.deliteMailPost(mailObj);
    },
    popupClose() {
      this.popupOpen = false;
    },
    inComeGet() { // получает список всех "входящих" и полностью обновляет вёрстку
      api.inCome()
        .then((res) => {
          this.inMail.deleteAll();
          this.inMail.addArray(res.message);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    },
    deliteMailPost(mailObj) { // добавляет запись в бд удалённых и обновляет вёрстку
      console.log(mailObj);
      api.postMailDelite(mailObj)
        .then((res) => {
          this.basketMail.add(mailObj);
        })
        .catch((err) => {
          console.log(err);
        })
    },
  },
  setup() {
    const inMail = useInMailStore();
    const sendMail = useSendMailStore();
    const draftMail = useDraftMailStore();
    const basketMail = useBasketMailStore();

    const styleDragADropStore = useDragADropStore();

    const route = useRoute();
    const path = computed(() => route.path);

    return {
      inMail,
      sendMail,
      draftMail,
      basketMail,
      drawerLeft: ref(false),
      popupOpen: ref(false),
      path,
      styleDragADropStore,
    }
  }
})
</script>

<style scoped lang="scss">
:deep(aside) {
  /* переопределяем цвет элемента появляющегося автоматически */
  background-color: transparent;
}

@media all and (max-width: 500px) {
  :deep(aside) {
    /* переопределяем цвет элемента появляющегося автоматически */
    background-color: #edebeb;
  }
}

.page {
  background-image: linear-gradient(to left, #d7d5d5, transparent, #d7d5d5);
}

.header {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(to left, #d7d5d5, #fff, #d7d5d5);
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
  display: flex;
  border-radius: 0;
  width: 300px;
  height: 100%;
}

.menu__button_active {
  background-color: #b6b5b5;
}

.menu__button_d-a-d-active {
  border: 3px solid rgb(245, 245, 38);
}

.menu__footer-button {
  margin-top: 100px;
  height: 50px;
  width: 290px;
  margin: 5px;
}

.menu__button-open {
  position: absolute;
  width: 34px;
  left: 10px;
  top: 8px;
}

.menu__button-new-mail {
  position: fixed;
  bottom: 20px;
  right: 100px;
  z-index: 1;
}
</style>
