import { _ as __nuxt_component_0 } from "./TheHeader-3771f8b0.js";
import { e as __nuxt_component_1, _ as _export_sfc } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "default-layout" }, _attrs))} data-v-49a16c1c><div class="h-screen" data-v-49a16c1c>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(`<main class="mx-auto xl_container bg-white" data-v-49a16c1c>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</main></div></div>`);
}
const default_vue_vue_type_style_index_0_scoped_49a16c1c_lang = "";
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender], ["__scopeId", "data-v-49a16c1c"]]);
export {
  _default as default
};
//# sourceMappingURL=default-3cec548e.js.map
