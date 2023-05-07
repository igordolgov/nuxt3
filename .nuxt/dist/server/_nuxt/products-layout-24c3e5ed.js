import { _ as __nuxt_component_0 } from "./TheHeader-3771f8b0.js";
import { e as __nuxt_component_1, _ as _export_sfc } from "../server.mjs";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
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
function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-layout" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mx-auto px-0"${_scopeId}><div class="grid grid-cols-full"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "mx-auto px-0" }, [
            createVNode("div", { class: "grid grid-cols-full" }, [
              createVNode(_component_NuxtPage)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<main class="p-4">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/products-layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const productsLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  productsLayout as default
};
//# sourceMappingURL=products-layout-24c3e5ed.js.map
