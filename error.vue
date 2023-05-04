<template lang="pug">
//- Кастомная страница ошибки (если запрашиваемой страницы не существует)
.flex.items-center.justify-center.min-w-screen.min-h-screen.bg-gradient-to-r.from-blue-500.to-red-500
  .p-6.rounded-lg.shadow-xl.bg-white
    .grid.grid-cols-1.text-center
      h1.text-9xl.font-bold.text-sky-500
        | 404
      h6.mb-2.text-2xl.font-bold.text-center.text-gray-800.md_text-3xl
      span.text-bold.text-xl
        | Ой! Страница не найдена
      p.mb-8.text-center.text-gray-500.md_text-lg
        | Страница, которую вы ищете, не существует
      //- NuxtLink - аналог тега <a> (ссылка)
      NuxtLink(
        to="/" type="button" @click="handleError"
        ).bg-sky-700.text-white.rounded-md.px-2.py-2.mt-1.select-none.rounded.bg-sky.font-medium.uppercase
        | Домой
</template>

<script setup>
const props = defineProps( {
  error: Object
} )
const handleError = () => clearError( { redirect: '/' } )
</script>