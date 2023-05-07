import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './PreviewComponent-9c74d793.mjs';
import { mergeProps, unref, useSSRContext } from 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue/server-renderer/index.mjs';
import { b as useProductStore } from './server.mjs';
import './renderer.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/ufo/dist/index.mjs';
import './nitro-prerenderer.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/radix3/dist/index.mjs';
import './nuxt-link-ae137144.mjs';
import './cart-350cff1f.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/@iconify/vue/dist/iconify.mjs';

const _sfc_main = {
  __name: "ProductsPage",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const products = productStore.products;
    productStore.fill();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AsideComponent = __nuxt_component_0;
      const _component_PreviewComponent = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "products-page" }, _attrs))}><head><title>SKSAVIA - \u041A\u0430\u0442\u0430\u043B\u043E\u0433</title></head><div class="h-full flex-row sm_flex p-4 pb-0">`);
      _push(ssrRenderComponent(_component_AsideComponent, { class: "sm_h-full sticky top-0 pb-px" }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ProductsPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProductsPage-eb939c58.mjs.map
