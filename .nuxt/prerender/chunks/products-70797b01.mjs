const products = [
  {
    id: 1,
    category: "\u041C\u043E\u0442\u043E\u0440\u044B",
    name: "Magnum 46 XLS \u0441 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u0435\u043C",
    condition: "\u041D\u043E\u0432\u044B\u0439",
    description: "\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0430 \u0444\u043E\u0442\u043E; \u0431\u0435\u0437 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438",
    price: 4e3,
    quantity: 0,
    image: "engine1-01.jpg",
    images: [
      {
        src: "/img/engines/engine1-01.jpg"
      },
      {
        src: "/img/engines/engine1-02.jpg"
      },
      {
        src: "/img/engines/engine1-03.jpg"
      },
      {
        src: "/img/engines/engine1-04.jpg"
      },
      {
        src: "/img/engines/engine1-05.jpg"
      },
      {
        src: "/img/engines/engine1-06.jpg"
      },
      {
        src: "/img/engines/engine1-07.jpg"
      }
    ],
    slug: "Magnum-46-XLS",
    stripePriceId: "price_1M3cNpJ54Rta1TGWG1dk5aI5"
  },
  {
    id: 2,
    category: "\u041C\u043E\u0442\u043E\u0440\u044B",
    name: "T2M.21",
    condition: "\u041D\u043E\u0432\u044B\u0439",
    description: "\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0430 \u0444\u043E\u0442\u043E; \u0431\u0435\u0437 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438",
    price: 6500,
    quantity: 1,
    image: "engine2-01.jpg",
    images: [
      {
        src: "/img/engines/engine2-01.jpg"
      },
      {
        src: "/img/engines/engine2-02.jpg"
      },
      {
        src: "/img/engines/engine2-03.jpg"
      },
      {
        src: "/img/engines/engine2-04.jpg"
      },
      {
        src: "/img/engines/engine2-05.jpg"
      },
      {
        src: "/img/engines/engine2-06.jpg"
      }
    ],
    slug: "T2M.21",
    stripePriceId: "price_1M3cvQJ54Rta1TGWYznZxCKu"
  },
  {
    id: 3,
    category: "\u041C\u043E\u0442\u043E\u0440\u044B",
    name: "Super Tigre G2300 MK II",
    condition: "\u0411/\u0443",
    description: "\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0430 \u0444\u043E\u0442\u043E; \u0432 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435",
    price: 8e3,
    quantity: 3,
    image: "engine3-01.jpg",
    images: [
      {
        src: "/img/engines/engine3-01.jpg"
      },
      {
        src: "/img/engines/engine3-02.jpg"
      },
      {
        src: "/img/engines/engine3-03.jpg"
      },
      {
        src: "/img/engines/engine3-04.jpg"
      },
      {
        src: "/img/engines/engine3-05.jpg"
      },
      {
        src: "/img/engines/engine3-06.jpg"
      },
      {
        src: "/img/engines/engine3-07.jpg"
      },
      {
        src: "/img/engines/engine3-08.jpg"
      },
      {
        src: "/img/engines/engine3-09.jpg"
      },
      {
        src: "/img/engines/engine3-10.jpg"
      }
    ],
    slug: "Super-Tigre",
    stripePriceId: "price_1M3cNpJ54Rta1TGWG1dk5aI5"
  },
  {
    id: 4,
    category: "\u041F\u0440\u043E\u043F\u0435\u043B\u043B\u0435\u0440\u044B",
    name: "APC 7x7",
    condition: "\u041D\u043E\u0432\u044B\u0439",
    description: "\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0430 \u0444\u043E\u0442\u043E; \u0432 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435",
    price: 170,
    quantity: 1,
    image: "propeller1-01.jpg",
    images: [
      {
        src: "/img/propellers/propeller1-01.jpg"
      }
    ],
    slug: "APC-7x7",
    stripePriceId: "price_1M3cNpJ54Rta1TGWG1dk5aI5"
  },
  {
    id: 5,
    category: "\u041F\u0440\u043E\u043F\u0435\u043B\u043B\u0435\u0440\u044B",
    name: "APC 7x8",
    condition: "\u041D\u043E\u0432\u044B\u0439",
    price: 170,
    quantity: 1,
    image: "propeller2-01.jpg",
    images: [
      {
        src: "/img/propellers/propeller2-01.jpg"
      }
    ],
    slug: "APC-7x8",
    stripePriceId: "price_1M3cvQJ54Rta1TGWYznZxCKu"
  },
  {
    id: 6,
    category: "\u041F\u0440\u043E\u043F\u0435\u043B\u043B\u0435\u0440\u044B",
    name: "APC 7x9",
    condition: "\u041D\u043E\u0432\u044B\u0439",
    description: "\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0430 \u0444\u043E\u0442\u043E; \u0432 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435",
    price: 170,
    quantity: 1,
    image: "propeller3-01.jpg",
    images: [
      {
        src: "/img/propellers/propeller3-01.jpg"
      }
    ],
    slug: "APC-7x9",
    stripePriceId: "price_1M3cvQJ54Rta1TGWYznZxCKu"
  },
  {
    id: 7,
    category: "\u041F\u0440\u043E\u043F\u0435\u043B\u043B\u0435\u0440\u044B",
    name: "APC 8x3,8 Slowfly",
    condition: "\u041D\u043E\u0432\u044B\u0439",
    description: "\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0430 \u0444\u043E\u0442\u043E; \u0432 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435",
    price: 170,
    quantity: 1,
    image: "propeller4-01.jpg",
    images: [
      {
        src: "/img/propellers/propeller4-01.jpg"
      }
    ],
    slug: "APC-8x3",
    stripePriceId: "price_1M3cvQJ54Rta1TGWYznZxCKu"
  },
  {
    id: 8,
    category: "\u0421\u0442\u0430\u0440\u0442\u0435\u0440\u044B",
    name: "Turbex L-APR 100",
    condition: "\u0411/\u0443",
    description: "\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0430 \u0444\u043E\u0442\u043E; \u0432 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435",
    price: 1200,
    quantity: 1,
    image: "starter2-01.jpg",
    images: [
      {
        src: "/img/starters/starter2-01.jpg"
      },
      {
        src: "/img/starters/starter2-02.jpg"
      },
      {
        src: "/img/starters/starter2-03.jpg"
      }
    ],
    slug: "Turbex-L-APR-100",
    stripePriceId: "price_1M3cvQJ54Rta1TGWYznZxCKu"
  },
  {
    id: 9,
    category: "\u0421\u0442\u0430\u0440\u0442\u0435\u0440\u044B",
    name: "Anderson PM-60",
    condition: "\u0411/\u0443",
    description: "\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0430 \u0444\u043E\u0442\u043E; \u0431\u0435\u0437 \u0440\u0435\u0437\u0438\u043D\u043E\u0432\u043E\u0439 \u0432\u0441\u0442\u0430\u0432\u043A\u0438; \u0432 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435",
    price: 2e3,
    quantity: 1,
    image: "starter1-01.jpg",
    images: [
      {
        src: "/img/starters/starter1-01.jpg"
      },
      {
        src: "/img/starters/starter1-02.jpg"
      },
      {
        src: "/img/starters/starter1-03.jpg"
      },
      {
        src: "/img/starters/starter1-04.jpg"
      }
    ],
    slug: "Anderson-PM-60",
    stripePriceId: "price_1M3cvQJ54Rta1TGWYznZxCKu"
  },
  {
    id: 10,
    category: "\u0421\u0442\u0430\u0440\u0442\u0435\u0440\u044B",
    name: "HPI Nitro Start",
    condition: "\u0411/\u0443",
    description: "\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0430 \u0444\u043E\u0442\u043E; \u0431\u0435\u0437 \u0432\u0430\u043B\u0430; \u0431\u0435\u0437 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438",
    price: 1500,
    quantity: 1,
    image: "starter3-01.jpg",
    images: [
      {
        src: "/img/starters/starter3-01.jpg"
      },
      {
        src: "/img/starters/starter3-02.jpg"
      }
    ],
    slug: "HPI-Nitro-Start",
    stripePriceId: "price_1M3cvQJ54Rta1TGWYznZxCKu"
  },
  {
    id: 11,
    category: "\u0421\u0442\u0430\u0440\u0442\u0435\u0440\u044B",
    name: "Team Losi Sport",
    condition: "\u041D\u043E\u0432\u044B\u0439",
    description: "\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0430 \u0444\u043E\u0442\u043E; \u0431\u0435\u0437 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438",
    price: 2e3,
    quantity: 1,
    image: "starter4-01.jpg",
    images: [
      {
        src: "/img/starters/starter4-01.jpg"
      },
      {
        src: "/img/starters/starter4-02.jpg"
      },
      {
        src: "/img/starters/starter4-03.jpg"
      },
      {
        src: "/img/starters/starter4-04.jpg"
      }
    ],
    slug: "Team-Losi-Sport",
    stripePriceId: "price_1M3cvQJ54Rta1TGWYznZxCKu"
  }
];

export { products as default };
//# sourceMappingURL=products-70797b01.mjs.map
