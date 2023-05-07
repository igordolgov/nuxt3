import { b as buildAssetsURL } from './renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-ae137144.mjs';
import { useSSRContext, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock } from 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, b as useProductStore } from './server.mjs';
import { u as useCartStore } from './cart-350cff1f.mjs';

const _sfc_main$1 = {
  __name: "AsideComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const products = productStore.products;
    productStore.fill();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "text-md sm_text-lg -mt-4 sm_-mt-1" }, _attrs))} data-v-d8333c7d><ul class="products-list" data-v-d8333c7d><li class="list-items flex w-48 font-normal sm_flex-col sm_font-normal" data-v-d8333c7d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "px-3 rounded-lg hover_text-sky-600 py-3 sm_py-1 mr-4 relative",
        to: "/MotorsPage"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041C\u043E\u0442\u043E\u0440\u044B<div class="hidden sm_inline-block" data-v-d8333c7d${_scopeId}>\xA0(${ssrInterpolate(unref(products).filter((item) => item.category == "\u041C\u043E\u0442\u043E\u0440\u044B").length)})</div>`);
          } else {
            return [
              createTextVNode("\u041C\u043E\u0442\u043E\u0440\u044B"),
              createVNode("div", { class: "hidden sm_inline-block" }, "\xA0(" + toDisplayString(unref(products).filter((item) => item.category == "\u041C\u043E\u0442\u043E\u0440\u044B").length) + ")", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "px-3 rounded-lg hover_text-sky-600 py-3 sm_py-1 mr-4 relative",
        to: "/PropellersPage"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u0440\u043E\u043F\u0435\u043B\u043B\u0435\u0440\u044B<div class="hidden sm_inline-block" data-v-d8333c7d${_scopeId}>\xA0(${ssrInterpolate(unref(products).filter((item) => item.category == "\u041F\u0440\u043E\u043F\u0435\u043B\u043B\u0435\u0440\u044B").length)})</div>`);
          } else {
            return [
              createTextVNode("\u041F\u0440\u043E\u043F\u0435\u043B\u043B\u0435\u0440\u044B"),
              createVNode("div", { class: "hidden sm_inline-block" }, "\xA0(" + toDisplayString(unref(products).filter((item) => item.category == "\u041F\u0440\u043E\u043F\u0435\u043B\u043B\u0435\u0440\u044B").length) + ")", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "px-3 rounded-lg hover_text-sky-600 py-3 sm_py-1 mr-4 relative",
        to: "/StartersPage"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u0442\u0430\u0440\u0442\u0435\u0440\u044B<div class="hidden sm_inline-block" data-v-d8333c7d${_scopeId}>\xA0(${ssrInterpolate(unref(products).filter((item) => item.category == "\u0421\u0442\u0430\u0440\u0442\u0435\u0440\u044B").length)})</div>`);
          } else {
            return [
              createTextVNode("\u0421\u0442\u0430\u0440\u0442\u0435\u0440\u044B"),
              createVNode("div", { class: "hidden sm_inline-block" }, "\xA0(" + toDisplayString(unref(products).filter((item) => item.category == "\u0421\u0442\u0430\u0440\u0442\u0435\u0440\u044B").length) + ")", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></aside>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AsideComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d8333c7d"]]);
const engine101 = "" + buildAssetsURL("engine1-01.48a26889.jpg");
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine101
});
const engine102 = "" + buildAssetsURL("engine1-02.bab91204.jpg");
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine102
});
const engine103 = "" + buildAssetsURL("engine1-03.0a24a999.jpg");
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine103
});
const engine104 = "" + buildAssetsURL("engine1-04.03e68e50.jpg");
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine104
});
const engine105 = "" + buildAssetsURL("engine1-05.e0234926.jpg");
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine105
});
const engine106 = "" + buildAssetsURL("engine1-06.7ad6cb6d.jpg");
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine106
});
const engine107 = "" + buildAssetsURL("engine1-07.11b2fb45.jpg");
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine107
});
const engine201 = "" + buildAssetsURL("engine2-01.6ec63972.jpg");
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine201
});
const engine202 = "" + buildAssetsURL("engine2-02.90ae422b.jpg");
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine202
});
const engine203 = "" + buildAssetsURL("engine2-03.073aec9d.jpg");
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine203
});
const engine204 = "" + buildAssetsURL("engine2-04.447ea78f.jpg");
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine204
});
const engine205 = "" + buildAssetsURL("engine2-05.2dcc390e.jpg");
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine205
});
const engine206 = "" + buildAssetsURL("engine2-06.ee37dd85.jpg");
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine206
});
const engine301 = "" + buildAssetsURL("engine3-01.d21b1a5e.jpg");
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine301
});
const engine302 = "" + buildAssetsURL("engine3-02.ac954bd9.jpg");
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine302
});
const engine303 = "" + buildAssetsURL("engine3-03.78c7872c.jpg");
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine303
});
const engine304 = "" + buildAssetsURL("engine3-04.d546d44e.jpg");
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine304
});
const engine305 = "" + buildAssetsURL("engine3-05.71d57f81.jpg");
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine305
});
const engine306 = "" + buildAssetsURL("engine3-06.2f624dc0.jpg");
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine306
});
const engine307 = "" + buildAssetsURL("engine3-07.20ad9bf9.jpg");
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine307
});
const engine308 = "" + buildAssetsURL("engine3-08.7cd5d70d.jpg");
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine308
});
const engine309 = "" + buildAssetsURL("engine3-09.972b6eec.jpg");
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine309
});
const engine310 = "" + buildAssetsURL("engine3-10.564438e1.jpg");
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: engine310
});
const propeller101 = "" + buildAssetsURL("propeller1-01.62f2a13b.jpg");
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: propeller101
});
const propeller201 = "" + buildAssetsURL("propeller2-01.c8359f11.jpg");
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: propeller201
});
const propeller301 = "" + buildAssetsURL("propeller3-01.9eb59fda.jpg");
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: propeller301
});
const propeller401 = "" + buildAssetsURL("propeller4-01.d0dc41ef.jpg");
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: propeller401
});
const propeller501 = "" + buildAssetsURL("propeller5-01.4822a8eb.jpg");
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: propeller501
});
const shoes = "" + buildAssetsURL("shoes.9da58c3d.jpg");
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: shoes
});
const starter101 = "" + buildAssetsURL("starter1-01.31266f0d.jpg");
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: starter101
});
const starter201 = "" + buildAssetsURL("starter2-01.c77d50b4.jpg");
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: starter201
});
const starter301 = "" + buildAssetsURL("starter3-01.08aa1c15.jpg");
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: starter301
});
const starter401 = "" + buildAssetsURL("starter4-01.4574346f.jpg");
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: starter401
});
const sunglasses = "" + buildAssetsURL("sunglasses.b275f230.jpg");
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: sunglasses
});
function useAssets(asset) {
  const assets = /* @__PURE__ */ Object.assign({ "/assets/images/products/engine1-01.jpg": __vite_glob_0_0, "/assets/images/products/engine1-02.jpg": __vite_glob_0_1, "/assets/images/products/engine1-03.jpg": __vite_glob_0_2, "/assets/images/products/engine1-04.jpg": __vite_glob_0_3, "/assets/images/products/engine1-05.jpg": __vite_glob_0_4, "/assets/images/products/engine1-06.jpg": __vite_glob_0_5, "/assets/images/products/engine1-07.jpg": __vite_glob_0_6, "/assets/images/products/engine2-01.jpg": __vite_glob_0_7, "/assets/images/products/engine2-02.jpg": __vite_glob_0_8, "/assets/images/products/engine2-03.jpg": __vite_glob_0_9, "/assets/images/products/engine2-04.jpg": __vite_glob_0_10, "/assets/images/products/engine2-05.jpg": __vite_glob_0_11, "/assets/images/products/engine2-06.jpg": __vite_glob_0_12, "/assets/images/products/engine3-01.jpg": __vite_glob_0_13, "/assets/images/products/engine3-02.jpg": __vite_glob_0_14, "/assets/images/products/engine3-03.jpg": __vite_glob_0_15, "/assets/images/products/engine3-04.jpg": __vite_glob_0_16, "/assets/images/products/engine3-05.jpg": __vite_glob_0_17, "/assets/images/products/engine3-06.jpg": __vite_glob_0_18, "/assets/images/products/engine3-07.jpg": __vite_glob_0_19, "/assets/images/products/engine3-08.jpg": __vite_glob_0_20, "/assets/images/products/engine3-09.jpg": __vite_glob_0_21, "/assets/images/products/engine3-10.jpg": __vite_glob_0_22, "/assets/images/products/propeller1-01.jpg": __vite_glob_0_23, "/assets/images/products/propeller2-01.jpg": __vite_glob_0_24, "/assets/images/products/propeller3-01.jpg": __vite_glob_0_25, "/assets/images/products/propeller4-01.jpg": __vite_glob_0_26, "/assets/images/products/propeller5-01.jpg": __vite_glob_0_27, "/assets/images/products/shoes.jpg": __vite_glob_0_28, "/assets/images/products/starter1-01.jpg": __vite_glob_0_29, "/assets/images/products/starter2-01.jpg": __vite_glob_0_30, "/assets/images/products/starter3-01.jpg": __vite_glob_0_31, "/assets/images/products/starter4-01.jpg": __vite_glob_0_32, "/assets/images/products/sunglasses.jpg": __vite_glob_0_33 });
  const getAssetUrl = () => {
    if (assets[asset]) {
      return assets[asset].default;
    }
  };
  return getAssetUrl();
}
const _sfc_main = {
  __name: "PreviewComponent",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const image = useAssets(`/assets/images/products/${props.product.image}`);
    const productStore = useProductStore();
    productStore.products;
    useCartStore();
    productStore.fill();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-preview h-full bg-white pb-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `products/${__props.product.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="object-contain aspect-square bg-stone-300 rounded-xl"${ssrRenderAttr("src", unref(image))}${ssrRenderAttr("alt", `${__props.product.name}'s image`)}${_scopeId}><div class="p-2 pb-0 text-sm"${_scopeId}><h5 class="font-semibold truncate max-h-[20px]"${_scopeId}>${ssrInterpolate(__props.product.name)}</h5>`);
            if (__props.product.quantity < 1) {
              _push2(`<p class="text-red-500 font-semibold"${_scopeId}>\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438</p>`);
            } else {
              _push2(`<p${_scopeId}>${ssrInterpolate(__props.product.price)} \u20BD</p>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("img", {
                class: "object-contain aspect-square bg-stone-300 rounded-xl",
                src: unref(image),
                alt: `${__props.product.name}'s image`
              }, null, 8, ["src", "alt"]),
              createVNode("div", { class: "p-2 pb-0 text-sm" }, [
                createVNode("h5", { class: "font-semibold truncate max-h-[20px]" }, toDisplayString(__props.product.name), 1),
                __props.product.quantity < 1 ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-red-500 font-semibold"
                }, "\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438")) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString(__props.product.price) + " \u20BD", 1))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PreviewComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=PreviewComponent-9c74d793.mjs.map
