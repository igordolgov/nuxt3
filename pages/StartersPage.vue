<template lang="pug">
.starters-page
  head
    title SKSAVIA - Стартеры
  .h-full.flex-row.sm_flex.p-4.pb-0
    AsideComponent.sm_h-full.sticky.top-0.pb-px.bg-white
    .grid.grid-cols-2.gap-4.h-fit.pb-4.sm_grid-cols-3.lg_grid-cols-5.xl_grid-cols-6
      div(v-for="(product, index) in products" :key="'product '+index")
        PreviewComponent(:product="product").border.border-transparent.hover_rounded-xl.hover_border-gray-500
</template>

<script setup>
import { useProductStore } from '~/stores/products'
const productStore = useProductStore()
const products = productStore.products.filter(item => item.category == "Стартеры")
productStore.fill()
</script>
