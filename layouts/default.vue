<template lang="pug">
//- Разметка по умолчанию
.default-layout
	.h-screen
		TheHeader
		main.mx-auto.pb-0.lg_container
			NuxtPage
</template>

<style lang="sass" scoped>
main
	height: calc(100vh - 94px)
</style>
