import { Swiper, SwiperSlide } from "swiper/vue";
import { computed, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import "hookable";
import { b as useProductStore, d as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { Autoplay, Navigation, EffectFade, Pagination, Keyboard, Mousewheel } from "swiper";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useCartStore } from "./cart-350cff1f.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _slug__vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    useCartStore();
    const route = useRoute();
    const product = computed(() => {
      return productStore.products.find((product2) => {
        return product2.slug === route.params.slug;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<!--[--><head><title>SKSAVIA - ${ssrInterpolate(unref(product).name)}</title></head><div class="product-slug"><div class="block sm_flex my-0 sm_pr-4">`);
      _push(ssrRenderComponent(_component_Swiper, {
        class: "mb-0 w-full",
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation), "SwiperEffectFade" in _ctx ? _ctx.SwiperEffectFade : unref(EffectFade), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination), "SwiperKeyboard" in _ctx ? _ctx.SwiperKeyboard : unref(Keyboard), "SwiperMousewheel" in _ctx ? _ctx.SwiperMousewheel : unref(Mousewheel)],
        "slides-per-view": 1,
        effect: "fade",
        loop: true,
        navigation: "",
        mousewheel: "",
        keyboard: { enabled: true },
        pagination: { clickable: true },
        autoplay: { delay: 8e3, disableOnInteraction: true }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(product).images, (item) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                class: "swiper-slide flex justify-center object-contain bg-stone-200 aspect-square",
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="object-contain select-none w-auto"${ssrRenderAttr("src", item.src)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "object-contain select-none w-auto",
                        src: item.src
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(product).images, (item) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  class: "swiper-slide flex justify-center object-contain bg-stone-200 aspect-square",
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "object-contain select-none w-auto",
                      src: item.src
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ml-4 mt-2"><h2 class="text-xl font-semibold">${ssrInterpolate(unref(product).name)}</h2><p>${ssrInterpolate(unref(product).description)}</p>`);
      if (unref(product).quantity > 0) {
        _push(`<p>Кол-во: ${ssrInterpolate(unref(product).quantity)} шт.</p>`);
      } else {
        _push(`<p class="text-red-500 font-semibold">НЕТ В НАЛИЧИИ!</p>`);
      }
      _push(`<p>${ssrInterpolate(unref(product).condition)}</p><p class="mb-4">${ssrInterpolate(unref(product).price)} ₽</p>`);
      if (unref(product).quantity > 0) {
        _push(`<button class="bg-[#2490C5] px-4 py-4 text-white rounded-lg hover_bg-sky-600">Добавить в Корзину</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-989c1243.js.map
