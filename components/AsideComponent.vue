<template lang="pug">
aside.text-md.sm_text-lg
	.hidden.my-4.font-semibold.border-b.border-stone-400.sm_block.sm_mr-4
		| Каталог:
	ul.products-list.mb-4.sm_mr-4
		li.list-items.flex.justify-between.font-normal.sm_flex-col.sm_space-y-3.sm_font-normal
			NuxtLink(to="/MotorsPage").border.border-gray-500.px-3.rounded-lg.hover_bg-stone-100.py-2
				| Моторы
			NuxtLink(to="/PropellersPage").border.border-gray-500.px-3.rounded-lg.hover_bg-stone-100.py-2
				| Пропеллеры
			NuxtLink(to="/StartersPage").border.border-gray-500.px-3.rounded-lg.hover_bg-stone-100.py-2
				| Стартеры
</template>
