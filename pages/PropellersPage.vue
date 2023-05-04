<template lang="pug">
.propellers-page
  head
    title SKSAVIA - Пропеллеры
  .flex-row.sm_flex.p-4.pb-0
    AsideComponent.sm_h-full.sticky.top-0.pb-px.bg-white
    .grid.grid-cols-2.gap-4.pb-4.sm_grid-cols-3.lg_grid-cols-5.xl_grid-cols-6
      div(v-for="(product, index) in products" :key="'product '+index").border-2.lg_border-px.border-stone-400.hover_shadow-lg
        PreviewComponent(:product="product")
</template>

<script setup>
import { useProductStore } from '~/stores/products'
const productStore = useProductStore()
const products = productStore.products.filter(item => item.category == "Пропеллеры")
productStore.fill()
</script>
