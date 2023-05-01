<template lang="pug">
head
  title SKSAVIA - Контакты
.news-page
  .mx-auto.px-4.lg_container
    h1.text-lg.font-bold.my-2 Наши контакты:
    p Кабардино-Балкарская Республика, г.Нарткала, ул.Кабардинская, д.62
    p Пн-Пт: 10:00-18:00
    .flex
      .telephone(itemprop="telephone").mr-4
        a(href="tel:+7903425-30-68") +7(903)425-30-68
      .email(itemprop="email")
        a(href="mailto:sksnartkala@mail.ru") sksnartkala@mail.ru
  .maps.mt-3
    iframe(src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=43.855033%2C43.558459&mode=search&oid=2498075644&ol=biz&source=mapframe&utm_source=mapframe&z=17.15", width="100%", height="555", frameborder="0")
</template>
