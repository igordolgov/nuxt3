<template lang="pug">
header.flex.items-center.text-white.text-lg.sticky.z-50.inset-x-0.top-0.h-14(class="bg-[#2490C5]")
	.container.mx-auto.md_px-4
		nav.flex.items-center.justify-between.sm_mr-0
			NuxtLink(to="/").flex.items-center
				.site-logo.hidden.sm_block
					img(src="/img/logo.png" alt="SKSAVIA").mr-6.max-h-14
				NuxtLink(to="/").mr-8 Главная
				NuxtLink(to="/ProductsPage", class="sm:px-3").mr-8 Каталог
				NuxtLink(to="/ContactsPage").mr-8 Контакты
			CartIndicator
</template>