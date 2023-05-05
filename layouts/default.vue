<template lang="pug">
//- Разметка по умолчанию
.default-layout
	.h-screen
		TheHeader
		main.mx-auto.xl_container.bg-white.lg_border-x.border-gray-400.shadow-xl.shadow-gray-400
			NuxtPage
</template>

<style lang="sass" scoped>
main
	min-height: calc(100% - 56px)
</style>
