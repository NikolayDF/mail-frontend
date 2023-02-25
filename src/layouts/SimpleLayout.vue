<template>
  <q-layout view="hhh lpr fff" class="page">
    <!--<div class="fullscreen bg-grey text-white text-center q-pa-md flex flex-center">
      <div>
        <div style="font-size: 30vh">
          404
        </div>
        <div class="text-h2" style="opacity:.8">
          Страница не найдена
        </div>
        <q-btn class="q-mt-xl" color="white" text-color="black" unelevated to="/" label="На главную" no-caps />
      </div>
    </div>-->
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

export default defineComponent({
  name: 'SimpleLayout'
})
</script>

<style scoped lang="scss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../images/background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
