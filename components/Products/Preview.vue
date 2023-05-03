<template lang="pug">
.product-preview
    nuxt-link(:to="`products/${product.slug}`")
        img.object-contain.aspect-square.bg-stone-300(:src="image" :alt="`${product.name}'s image`")
        .p-2.text-sm.text-black
            h5.mb-1.font-bold(class="min-h-[40px]")
                | {{ product.name }}
            p(v-if="product.quantity < 1").text-red-500 Нет в наличии
            p(v-else) {{ product.price }} руб.
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
productStore.fill();
</script>
