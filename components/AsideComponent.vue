<template lang="pug">
aside.text-md.sm_text-lg.-mt-4.sm_-mt-1
	ul.products-list
		li.list-items.flex.w-48.font-normal.sm_flex-col.sm_font-normal
			NuxtLink(to="/MotorsPage").px-3.sm_pl-0.rounded-lg.hover_text-sky-600.py-3.sm_py-1.mr-4.relative
				| Моторы
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Моторы").length }})
			NuxtLink(to="/PropellersPage").px-3.sm_pl-0.rounded-lg.hover_text-sky-600.py-3.sm_py-1.mr-4.relative
				| Пропеллеры
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Пропеллеры").length }})
			NuxtLink(to="/StartersPage").px-3.sm_pl-0.rounded-lg.hover_text-sky-600.py-3.sm_py-1.mr-4.relative
				| Стартеры
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Стартеры").length }})
</template>

<style scoped lang="sass">
.router-link-exact-active
  color: #008fd5
  border-color: #007bb7
</style>

<script setup>
import { useProductStore } from '~/stores/products'
const productStore = useProductStore()
const products = productStore.products
productStore.fill()
</script>
