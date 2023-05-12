<template lang="pug">
header.flex.items-center.text-white.text-lg.h-14(class="bg-[#2490C5]")
	.container.mx-auto.lg_px-4
		nav.flex.items-center.justify-between
			NuxtLink(to="/").flex.items-center
				.site-logo.hidden.sm_block
					img(src="/img/logo.png" alt="SKSAVIA").mr-6.max-h-14
				NuxtLink.nav_link.transition-colors.duration-700.ease-out(to="/")
					|	Главная
				NuxtLink.nav_link.transition-colors.duration-700.ease-out(to="/MotorsPage", class="sm:px-3")
					|	Каталог
				NuxtLink.nav_link.transition-colors.duration-700.ease-out.contacts(to="/ContactsPage")
					|	Контакты
			CartIndicator
</template>

<style scoped lang="sass">
.nav_link:not(:last-child), .contacts
  padding: 14px 17px
  background-color: none
.nav_link
  text-align: center
  &:hover
    background-color: #1e78a4
</style>