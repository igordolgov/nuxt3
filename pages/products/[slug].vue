<template lang="pug">
head
  title SKSAVIA - {{ product.name }}
.product-slug
  .block.sm_flex.my-0.sm_pr-4
    Swiper.mb-0.w-full(
      :modules=" [SwiperAutoplay, SwiperNavigation, SwiperEffectFade, SwiperPagination, SwiperKeyboard, SwiperMousewheel] ",
      :slides-per-view=" 1 ", :effect="'fade'", :loop=" true ", navigation, mousewheel, :keyboard="{enabled: true,}",
      :pagination=" { clickable: true } ", :autoplay=" { delay: 8000, disableOnInteraction: true } ")
      SwiperSlide.swiper-slide.flex.justify-center.object-contain.bg-stone-200.aspect-square(
        v-for="item in product.images", :key="item.id")
        img(:src="item.src").object-contain.select-none.w-auto
    div.ml-4.mt-2
      h2.text-xl.font-semibold {{ product.name }}
      p {{ product.description }}
      p(v-if="product.quantity > 0") Кол-во: {{ product.quantity }} шт.
      p(v-else).text-red-500.font-semibold НЕТ В НАЛИЧИИ!
      p {{ product.condition }}
      p.mb-4 {{ Intl.NumberFormat("ru").format(product.price) }} &#8381;
      button(v-if="product.quantity > 0"
        @click.once="cartStore.addItem(product)" class="bg-[#2490C5]").px-4.py-4.text-white.rounded-lg.hover_bg-sky-600
        | Добавить в&nbsp;Корзину
</template>

<style lang="sass">
.swiper-wrapper,
.swiper
  max-height: calc(100vh - 56px)
.swiper-slide
  display: flex
  justify-content: center
  text-align: center
.swiper-button-prev,
.swiper-button-next
  color: #2490C5
  font-weight: 700
.swiper-pagination-bullet
  height: 12px
  width: 12px
  margin: 0 5px !important
  &-active
    background: #2490C5
</style>

<script setup>
import {useProductStore} from '~~/stores/products'
import {useCartStore} from '~~/stores/cart'
const productStore = useProductStore()
const cartStore = useCartStore()
const route = useRoute()

const product = computed( () => {
  return productStore.products.find( product => {
    return product.slug === route.params.slug
  } )
} )

// const image = useAssets( `/public/img/${product.value.images}` )

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