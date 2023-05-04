<template lang="pug">
aside.text-md.sm_text-lg
	ul.products-list.mb-3
		li.list-items.flex.w-48.font-normal.sm_flex-col.sm_space-y-3.sm_font-normal
			NuxtLink(to="/MotorsPage").link.border-2.lg_border.border-gray-700.px-3.rounded-lg.hover_bg-stone-100.py-2.mr-4.relative
				| Моторы
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Моторы").length }})
				.line.hidden.w-5.h-1.lg_h-px.bg-sky-500.absolute.-right-5.top-5.-z-50
			NuxtLink(to="/PropellersPage").border-2.lg_border.border-gray-700.px-3.rounded-lg.hover_bg-stone-100.py-2.mr-4.relative
				| Пропеллеры
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Пропеллеры").length }})
				.line.hidden.w-5.h-1.lg_h-px.bg-sky-500.absolute.-right-5.top-5.-z-50
			NuxtLink(to="/StartersPage").border-2.lg_border.border-gray-700.px-3.rounded-lg.hover_bg-stone-100.py-2.mr-4.relative
				| Стартеры
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Стартеры").length }})
				.line.hidden.w-5.h-1.lg_h-px.bg-sky-500.absolute.-right-5.top-5.-z-50
</template>

<style scoped lang="sass">
.router-link-exact-active
  color: #008fd5
  border-color: #008fd5

@media (min-width: 640px)
  .router-link-exact-active .line
    display: block
</style>

<script setup>
import { useProductStore } from '~/stores/products'
const productStore = useProductStore()
const products = productStore.products
productStore.fill()
</script>
