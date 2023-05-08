<template lang="pug">
.cart-page
  head
    title SKSAVIA - Корзина
  .container-lg.sm_px-4
    .cart-full.mx-auto.bg-white(v-if="!cartStore.isEmpty" class="md_w-3/4 lg_w-2/4")
      h1.py-2.text-xl.text-center.font-semibold
        | Корзина
        table.table-auto.mx-auto.w-full.mt-2.text-sm.sm_text-lg
          thead.bg-neutral-200.border-y-2.border-stone-400
            tr
              th.px-3 Название
                span.text-sm.font-normal &nbsp;/ Цена
              th Кол-во
              th.px-3 Сумма
              th
          tbody.bg-neutral-50.border-y.border-stone-400.px-3.py-2.sm_px-4(v-for="item in cartStore.items" :key="item.id")
            tr
              td.pl-4.pr-3.py-1.md_text-md.text-left.font-semibold {{item.name}}&nbsp;
                span.font-light.span-size.block.sm_inline / {{Intl.NumberFormat("ru").format(item.price)}} &#8381;
              td.py-3.flex.justify-center
                button(@click="cartStore.decrement(item)").px-2.m-0
                  | -
                span.bg-white {{item.amount}}
                button(@click="cartStore.increment(item)").pr-3.pl-2.m-0
                  | +
              td.pr-3.py-2.text-right {{Intl.NumberFormat("ru").format(item.price * item.amount)}} &#8381;
              td.text-gray-400(@click="cartStore.clearItem(item.name)")
                svg.w-6.h-6.mx-auto.cursor-pointer.hover_text-red-600(fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg")
                  path(fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd")
      .flex-col.bg-amber-200.sticky.z-10.inset-x-0.bottom-0.ml-auto.mr-2.mt-1.px-4.py-2.rounded-xl(class="w-[250px]")
        .flex.justify-between
          .shipping Сумма доставки:
          span(class="pr-[2px]") {{Intl.NumberFormat("ru").format(cartStore.shipping)}} &#8381;
        .flex.justify-between
          .summary.font-bold Итого:
          span.font-bold {{Intl.NumberFormat("ru").format(cartStore.total)}} &#8381;
    .cart-empty(v-else="").text-center.my-auto.text-4xl.text-stone-300.font-bold.grid.place-items-center Корзина пуста
</template>

<style lang="sass">
table td, th
  font-weight: 500
.span-size
  font-size: smaller
.cart-empty
  min-height: calc(100vh - 90px)
</style>

<script setup>
import { useCartStore } from '~~/stores/cart'
const cartStore = useCartStore()
</script>