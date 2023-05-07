import { _ as __nuxt_component_0 } from './nuxt-link-ae137144.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/@iconify/vue/dist/iconify.mjs';
import './nitro-prerenderer.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/radix3/dist/index.mjs';

function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-blue-400 text-2xl">\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443!</h1>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-indigo-700",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041D\u0430\u0437\u0430\u0434`);
      } else {
        return [
          createTextVNode("\u041D\u0430\u0437\u0430\u0434")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/SuccessPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SuccessPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);

export { SuccessPage as default };
//# sourceMappingURL=SuccessPage-1efd6640.mjs.map
