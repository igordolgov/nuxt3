import { _ as __nuxt_component_0, a as __nuxt_component_1 } from "./PreviewComponent-9c74d793.js";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { b as useProductStore } from "../server.mjs";
import "./nuxt-link-ae137144.js";
import "ufo";
import "hookable";
import "./cart-350cff1f.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = {
  __name: "MotorsPage",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const products = productStore.products.filter((item) => item.category == "Моторы");
    productStore.fill();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AsideComponent = __nuxt_component_0;
      const _component_PreviewComponent = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "motors-page" }, _attrs))}><head><title>SKSAVIA - Моторы</title></head><div class="h-full flex-row sm_flex p-4 pb-0">`);
      _push(ssrRenderComponent(_component_AsideComponent, { class: "sm_h-full sticky top-0 pb-px bg-white" }, null, _parent));
      _push(`<div class="grid grid-cols-2 gap-4 h-fit pb-4 sm_grid-cols-3 lg_grid-cols-5 xl_grid-cols-6"><!--[-->`);
      ssrRenderList(unref(products), (product, index) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_PreviewComponent, {
          class: "border border-transparent hover_rounded-xl hover_border-gray-500",
          product
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/MotorsPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=MotorsPage-9d7a541c.js.map
