<template>
  <div class="fullscreen bg-grey text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.8">
        Страница не найдена
      </div>

      <q-btn class="q-mt-xl" color="white" text-color="black" unelevated to="/" label="На главную" no-caps />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
