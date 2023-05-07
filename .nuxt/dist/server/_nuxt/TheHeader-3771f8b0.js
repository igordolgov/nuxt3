import { _ as __nuxt_component_0$1 } from "./nuxt-link-ae137144.js";
import { computed, mergeProps, unref, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, createVNode, useSSRContext, createTextVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { u as useCartStore } from "./cart-350cff1f.js";
import { _ as _export_sfc } from "../server.mjs";
const CartIndicator_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "CartIndicator",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const cartItems = computed(() => {
      return cartStore.items;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        class: ["relative", { disabled: unref(cartItems).length < 1 }],
        to: "/cart"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(cartItems).length > 0) {
              _push2(`<div class="absolute -top-1 right-1 bg-red-600 text-white rounded-full text-xs h-5 w-5 mx-0 text-center flex justify-center justify-content-center flex-col border"${_scopeId}>${ssrInterpolate(unref(cartItems).length)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<svg class="w-7 h-7 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"${_scopeId}></path></svg>`);
          } else {
            return [
              unref(cartItems).length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "absolute -top-1 right-1 bg-red-600 text-white rounded-full text-xs h-5 w-5 mx-0 text-center flex justify-center justify-content-center flex-col border"
              }, toDisplayString(unref(cartItems).length), 1)) : createCommentVNode("", true),
              (openBlock(), createBlock("svg", {
                class: "w-7 h-7 mr-4",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewbox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartIndicator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _imports_0 = "" + __publicAssetsURL("img/logo.png");
function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_CartIndicator = __nuxt_component_1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex items-center text-white text-lg h-14 bg-[#2490C5]" }, _attrs))} data-v-f7946329><div class="container mx-auto lg_px-4" data-v-f7946329><nav class="flex items-center justify-between" data-v-f7946329>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="site-logo hidden sm_block" data-v-f7946329${_scopeId}><img class="mr-6 max-h-14"${ssrRenderAttr("src", _imports_0)} alt="SKSAVIA" data-v-f7946329${_scopeId}></div>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          class: "nav_link",
          to: "/"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Главная`);
            } else {
              return [
                createTextVNode("Главная")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, {
          class: "nav_link sm:px-3",
          to: "/ProductsPage"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Каталог`);
            } else {
              return [
                createTextVNode("Каталог")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, {
          class: "nav_link contacts",
          to: "/ContactsPage"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Контакты`);
            } else {
              return [
                createTextVNode("Контакты")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "site-logo hidden sm_block" }, [
            createVNode("img", {
              class: "mr-6 max-h-14",
              src: _imports_0,
              alt: "SKSAVIA"
            })
          ]),
          createVNode(_component_NuxtLink, {
            class: "nav_link",
            to: "/"
          }, {
            default: withCtx(() => [
              createTextVNode("Главная")
            ]),
            _: 1
          }),
          createVNode(_component_NuxtLink, {
            class: "nav_link sm:px-3",
            to: "/ProductsPage"
          }, {
            default: withCtx(() => [
              createTextVNode("Каталог")
            ]),
            _: 1
          }),
          createVNode(_component_NuxtLink, {
            class: "nav_link contacts",
            to: "/ContactsPage"
          }, {
            default: withCtx(() => [
              createTextVNode("Контакты")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_CartIndicator, null, null, _parent));
  _push(`</nav></div></header>`);
}
const TheHeader_vue_vue_type_style_index_0_scoped_f7946329_lang = "";
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender], ["__scopeId", "data-v-f7946329"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=TheHeader-3771f8b0.js.map
