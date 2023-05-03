<template lang="pug">
//- Далее разметка написана на языке Pug (для быстроты написания и удобства чтения)
  см. документацию на https://tailwindcss.com/ или на https://tailwindcss.ru/
  нет закрывающих тегов, вложенность обозначена отступами, классы указаны после точки,
  аттрибуты указаны в скобках, если тег не указан явно, то это тег div
//- Стили указаны инлайново (в самом теге) с помощью css-фреймворка Tailwind
  см. документацию на https://tailwindcss.com/ или на https://tailwindcss.ru/

//- Начальный файл приложения
.main
  //- Шаблон разметки (из папки layouts, по умолчанию default.vue):
  NuxtLayout
    //- Страницы из папки pages, вначале загружается страница index.vue:
    NuxtPage.py-3.bg-white.shadow-xl.h_screen
    //- Компонент из папки components (кнопка "Наверх страницы"):
  ScrollToTopComponent
</template>

<script setup>
import { useProductStore } from '~/stores/products'
const productStore = useProductStore()
productStore.fill()
</script>
