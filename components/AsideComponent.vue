<template lang="pug">
aside.text-md.sm_text-lg.-mt-4.sm_-mt-1.bg-white
	ul.products-list
		li.list-items.flex.w-48.font-normal.sm_flex-col.sm_font-normal.transition-colors
			NuxtLink(to="/MotorsPage").px-3.py-2.sm_py-1.rounded-lg.border-transparent.border.hover_border-stone-600.mr-4.relative.transition-colors.duration-1000.ease-out
				| Моторы
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Моторы").length }})
			NuxtLink(to="/PropellersPage").px-3.py-2.sm_py-1.rounded-lg.border-transparent.border.hover_border-stone-600.mr-4.relative.transition-colors.duration-1000.ease-out
				| Пропеллеры
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Пропеллеры").length }})
			NuxtLink(to="/StartersPage").px-3.py-2.sm_py-1.rounded-lg.border-transparent.border.hover_border-stone-600.mr-4.relative.transition-colors.duration-1000.ease-out
				| Стартеры
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Стартеры").length }})
</template>

<style scoped lang="sass">
.router-link-exact-active
  color: #008fd5
  // border-color: #007bb7
</style>

<script setup>
import { useProductStore } from '~/stores/products'
const productStore = useProductStore()
const products = productStore.products
productStore.fill()
</script>
