const products = [
  {
    id: 1,
    category: "Моторы",
    name: "Magnum 46 XLS с глушителем",
    condition: "Новый",
    description: "Продается всё, что на фото; без упаковки",
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
    category: "Моторы",
    name: "T2M.21",
    condition: "Новый",
    description: "Продается всё, что на фото; без упаковки",
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
    category: "Моторы",
    name: "Super Tigre G2300 MK II",
    condition: "Б/у",
    description: "Продается всё, что на фото; в упаковке",
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
    category: "Пропеллеры",
    name: "APC 7x7",
    condition: "Новый",
    description: "Продается всё, что на фото; в упаковке",
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
    category: "Пропеллеры",
    name: "APC 7x8",
    condition: "Новый",
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
    category: "Пропеллеры",
    name: "APC 7x9",
    condition: "Новый",
    description: "Продается всё, что на фото; в упаковке",
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
    category: "Пропеллеры",
    name: "APC 8x3,8 Slowfly",
    condition: "Новый",
    description: "Продается всё, что на фото; в упаковке",
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
    category: "Стартеры",
    name: "Turbex L-APR 100",
    condition: "Б/у",
    description: "Продается всё, что на фото; в упаковке",
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
    category: "Стартеры",
    name: "Anderson PM-60",
    condition: "Б/у",
    description: "Продается всё, что на фото; без резиновой вставки; в упаковке",
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
    category: "Стартеры",
    name: "HPI Nitro Start",
    condition: "Б/у",
    description: "Продается всё, что на фото; без вала; без упаковки",
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
    category: "Стартеры",
    name: "Team Losi Sport",
    condition: "Новый",
    description: "Продается всё, что на фото; без упаковки",
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
export {
  products as default
};
//# sourceMappingURL=products-70797b01.js.map
