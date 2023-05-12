<template lang="pug">
.product-preview.h-full.bg-white.pb-2.rounded-xl.transition-colors.duration-1000.ease-out
  NuxtLink(:to="`products/${product.slug}`")
    img.object-contain.aspect-square.bg-stone-300.rounded-xl(:src="image" :alt="`${product.name}'s image`")
    .p-2.pb-0.text-sm
      h5.font-semibold.truncate(class="max-h-[20px]") {{ product.name }}
      p(v-if="product.quantity < 1").text-red-500.font-semibold Нет в наличии
      p(v-else) {{ Intl.NumberFormat("ru").format(product.price) }} &#8381;
</template>

<script setup>
const props = defineProps( {
  product: {
    type: Object,
    required: true
  }
} )
const image = useAssets( `/assets/images/products/${props.product.image}` )
import {useProductStore} from '~/stores/products'
import {useCartStore} from '~~/stores/cart'
const productStore = useProductStore()
const products = productStore.products
const cartStore = useCartStore()
productStore.fill()
</script>
