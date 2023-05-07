import { b as useProductStore } from './server.mjs';
import { useSSRContext } from 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    productStore.fill();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><title>SKSAVIA - \u0413\u043B\u0430\u0432\u043D\u0430\u044F</title></head><div class="main-page text-center bg-white"><h1 class="text-xl sm_text-2xl pt-2">\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043C \u0412\u0430\u0441 \u043D\u0430\xA0\u043D\u0430\u0448\u0435\u043C\xA0\u0441\u0430\u0439\u0442\u0435!</h1><h2 class="mb-3 text-lg italic">\u041D\u0430\u0434\u0435\u0435\u043C\u0441\u044F, \u0447\u0442\u043E \u0412\u044B \u043D\u0430\u0439\u0434\u0451\u0442\u0435 \u0442\u043E, \u0447\u0442\u043E\xA0\u0438\u0441\u043A\u0430\u043B\u0438</h2><img class="max-h-[78vh] mx-auto" src="https://dopobr.tularegion.ru/images/events/cover/cacb10296dcb9d7101b8b9b3d7e62459_big.jpg"></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-6099cab9.mjs.map
