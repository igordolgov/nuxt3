<template lang="pug">
//- Разметка по умолчанию
.default-layout
	.h-screen
		TheHeader
		main.mx-auto.xl_container
			NuxtPage
</template>

<style lang="sass" scoped>
main
	min-height: calc(100% - 56px)
</style>
