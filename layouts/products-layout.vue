<template lang="pug">
.custom-layout
  TheHeader
    .container.mx-auto.px-4.min-h-screen
      .grid.grid-cols-full
        NuxtPage
  main.p-4
    slot
</template>
