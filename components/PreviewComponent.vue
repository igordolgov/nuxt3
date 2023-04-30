<template lang="pug">
.product-preview.h-full.bg-white
  NuxtLink(:to="`products/${product.slug}`")
    img.object-contain.aspect-square.bg-stone-300(:src="image" :alt="`${product.name}'s image`")
    .p-2.text-sm.text-black
      h5.font-bold(class="min-h-[42px]") {{ product.name }}
      p {{ product.price }} ₽
</template>

<script setup>
const props = defineProps( {
    product: {
        type: Object,
        required: true
    }
} )
const image = useAssets( `/assets/images/products/${props.product.image}` )
import { useProductStore } from '~/stores/products'
import { useCartStore } from '~~/stores/cart'
const productStore = useProductStore()
const products = productStore.products
const cartStore = useCartStore()
productStore.fill()
</script>
