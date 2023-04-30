<template lang="pug">
.product-slug.lg_container
  .block.sm_flex.pb-0.sm_p-4
    Swiper.mb-4.w-full(
      :modules=" [SwiperAutoplay, SwiperNavigation, SwiperPagination, SwiperKeyboard, SwiperMousewheel] ",
      :slides-per-view=" 1 ", :loop=" true ", navigation, mousewheel, :keyboard="{enabled: true,}",
      :pagination=" { clickable: true } ", :autoplay=" { delay: 8000, disableOnInteraction: true } ")
      SwiperSlide.swiper-slide.flex.justify-center.object-contain.text-center.bg-stone-200.aspect-square(
        v-for="item in product.images", :key="item.id")
        img(:src="item.src").object-contain.select-none
    div.ml-6
      h2.text-xl.font-semibold {{ product.name }}
      p {{ product.description }}
      p {{ product.condition }}
      p.mb-4 {{ product.price }} руб.
      button(@click="cartStore.addItem(product)").px-6.py-4.bg-sky-600.text-white.rounded-lg.hover_bg-sky-700
        | Добавить в Корзину
</template>

<style lang="sass">
.swiper-wrapper,
.swiper
    max-height: calc(100vh - 94px)

.swiper-slide
    display: flex
    justify-content: center
    height: auto
    text-align: center

.swiper-button-prev,
.swiper-button-next
    color: #2490C5
</style>

<script setup>
import { useProductStore } from '~~/stores/products'
import { useCartStore } from '~~/stores/cart'
const productStore = useProductStore()
const products = productStore.products
const cartStore = useCartStore()
const route = useRoute()

const product = computed( () => {
  return productStore.products.find( product => {
    return product.slug === route.params.slug
  } )
} )

const image = useAssets( `/public/img/${product.value.images}` )

async function addToCart () {
  await cartStore.addToCart( {
    id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    currency: 'rub',
    stripePriceId: product.value.stripePriceId
  } )
}
</script>