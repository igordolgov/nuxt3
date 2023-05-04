<template lang="pug">
.products-page
  head
    title SKSAVIA - Каталог
  .h-full.flex-row.sm_flex.p-4.pb-0
    AsideComponent.sm_h-full.sticky.top-0.pb-px.bg-white
    .grid.grid-cols-2.gap-4.h-fit.pb-4.sm_grid-cols-3.lg_grid-cols-5.xl_grid-cols-6
      div(v-for="(product, index) in products" :key="'product '+index").border-2.lg_border.border-stone-500.hover_shadow-lg
        PreviewComponent(:product="product")
</template>

<style lang="sass" scoped>
// .page
// 	height: calc(100vh - 56px)
</style>

<script setup>
import { useProductStore } from '~/stores/products'
const productStore = useProductStore()
const products = productStore.products
productStore.fill()
</script>
