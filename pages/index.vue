<template lang="pug">
head
  title SKSAVIA - Главная
//- Начальная (Главная, корневая, загружаемая по умолчанию) страница сайта
.main-page.text-center.bg-white
  h1.text-xl.sm_text-2xl.pt-2 Приветствуем Вас на&nbsp;нашем&nbsp;сайте!
  h2.mb-3.text-lg.italic Надеемся, что Вы найдёте то, что&nbsp;искали
  img(src="~/assets/images/cacb10296dcb9d7101b8b9b3d7e62459_big.jpg" class="max-h-[78vh]").mx-auto
</template>

<script setup>
import { useProductStore } from '~/stores/products'
const productStore = useProductStore()
productStore.fill()
</script>
