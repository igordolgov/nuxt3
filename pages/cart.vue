<template lang="pug">
.cart-page
  head
    title SKSAVIA - Корзина
  .container-lg.sm_px-4
    .cart-full.mx-auto.bg-white(v-if="!cartStore.isEmpty" class="md_w-3/4 lg_w-2/4")
      h1.my-3.text-xl.text-center.font-semibold
        | Корзина
      .bg-neutral-200.font-semibold.border-t.border-stone-400.px-3.py-1.sm_px-4
        .flex.justify-between.items-center.text-sm
          .description(class="min-w-[190px] md_min-w-[250px]")
            h2.md_text-lg Название / Цена
          span Кол-во
          span.pr-3 Сумма
          .flex-none.mt-2
      .bg-neutral-50.border-t.border-stone-400.px-3.py-2.sm_px-4(
        v-for="item in cartStore.items" :key="item.id")
        .flex.justify-between.items-center.text-sm
          img.hidden.object-contain(class="h-[80px] w-[80px]" :src="item.images[0].src")
          .description(class="min-w-[190px] md_min-w-[250px]")
            h2.md_text-lg {{item.name}}
            span.font-light {{item.price}} &#8381;
          .flex.m-0
            button(@click="cartStore.decrement(item)" class="pb-[2px]").px-2.m-0.border-r-0.border-gray-200
              | -
            span.px-2.m-0.border-r-0.border-gray-200.bg-white {{item.amount}}
            button(@click="cartStore.increment(item)" class="-tracking-[0.25em]").pr-3.pl-2.m-0
              | +
          .mt-1
            p {{item.price * item.amount}} &#8381;
          .flex-none.mt-2.text-gray-400(@click="cartStore.clearItem(item.name)")
            svg.w-6.h-6.cursor-pointer.hover_text-red-600(fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg")
              path(fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd")
      .flex.flex-col.bg-amber-100.sticky.z-10.inset-x-0.bottom-0.ml-auto.mr-2.mt-3.px-4.py-2.shadow-md.shadow-stone-300(class="w-[250px]")
        .flex.justify-between
          .shipping Сумма доставки:
          span(class="pr-[2px]") +1000 &#8381;
        .flex.justify-between
          .summary.font-bold Итого:
          span.font-bold {{cartStore.total}} &#8381;
    .cart-empty(v-else="").text-center.my-auto.text-5xl.text-stone-500.font-bold.grid.place-items-center Корзина пуста
</template>

<style lang="sass">
.cart-empty
  min-height: calc(100vh - 90px)
</style>

<script setup>
import { useCartStore } from '~~/stores/cart'
const cartStore = useCartStore()
</script>