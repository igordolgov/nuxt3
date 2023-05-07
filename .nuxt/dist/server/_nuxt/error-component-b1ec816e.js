import { _ as __nuxt_component_0 } from "./nuxt-link-ae137144.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { c as clearError } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const handleError = () => clearError({ redirect: "/" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-w-screen min-h-screen bg-gradient-to-r from-blue-500 to-red-500" }, _attrs))}><div class="p-6 rounded-lg shadow-xl bg-white"><div class="grid grid-cols-1 text-center"><h1 class="text-9xl font-bold text-sky-500">404</h1><h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md_text-3xl"></h6><span class="text-bold text-xl">Ой! Страница не найдена</span><p class="mb-8 text-center text-gray-500 md_text-lg">Страница, которую вы ищете, не существует</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "bg-sky-700 text-white rounded-md px-2 py-2 mt-1 select-none rounded bg-sky font-medium uppercase",
        to: "/",
        type: "button",
        onClick: handleError
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Домой`);
          } else {
            return [
              createTextVNode("Домой")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sfc_main$1 = _sfc_main;
export {
  _sfc_main$1 as default
};
//# sourceMappingURL=error-component-b1ec816e.js.map
