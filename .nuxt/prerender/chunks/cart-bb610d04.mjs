import { mergeProps, unref, useSSRContext } from 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/IgorDolgov/shop/nuxt3/node_modules/vue/server-renderer/index.mjs';
import { u as useCartStore } from './cart-350cff1f.mjs';
import './server.mjs';
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
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-page" }, _attrs))}><head><title>SKSAVIA - \u041A\u043E\u0440\u0437\u0438\u043D\u0430</title></head><div class="container-lg sm_px-4">`);
      if (!unref(cartStore).isEmpty) {
        _push(`<div class="cart-full mx-auto bg-white md_w-3/4 lg_w-2/4"><h1 class="py-3 text-xl text-center font-semibold">\u041A\u043E\u0440\u0437\u0438\u043D\u0430</h1><div class="bg-neutral-200 font-semibold border-t border-stone-400 px-3 py-1 sm_px-4"><div class="flex justify-between items-center text-md"><div class="description min-w-[190px] sm_min-w-[210px] md_min-w-[250px]"><h2>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435<span class="text-sm font-normal">\xA0/ \u0426\u0435\u043D\u0430</span></h2></div><span>\u041A\u043E\u043B-\u0432\u043E</span><span class="pr-3">\u0421\u0443\u043C\u043C\u0430</span><div class="flex-none mt-2"></div></div></div><!--[-->`);
        ssrRenderList(unref(cartStore).items, (item) => {
          _push(`<div class="bg-neutral-50 border-t border-stone-400 px-3 py-2 sm_px-4"><div class="flex justify-between items-center text-sm"><img class="hidden object-contain h-[80px] w-[80px]"${ssrRenderAttr("src", item.images[0].src)}><div class="description min-w-[190px] sm_min-w-[210px] md_min-w-[250px]"><h2 class="md_text-md font-semibold">${ssrInterpolate(item.name)}\xA0<span class="font-light block sm_inline">/ ${ssrInterpolate(item.price)} \u20BD</span></h2></div><div class="flex m-0"><button class="pb-[2px] px-2 m-0 border-r-0 border-gray-200">-</button><span class="px-2 m-0 border-r-0 border-gray-200 bg-white">${ssrInterpolate(item.amount)}</span><button class="-tracking-[0.25em] pr-3 pl-2 m-0">+</button></div><div class="mt-1"><p>${ssrInterpolate(item.price * item.amount)} \u20BD</p></div><div class="flex-none mt-2 text-gray-400"><svg class="w-6 h-6 cursor-pointer hover_text-red-600" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></div></div></div>`);
        });
        _push(`<!--]--><div class="flex flex-col bg-amber-100 sticky z-10 inset-x-0 bottom-0 ml-auto mr-2 mt-3 px-4 py-2 shadow-md shadow-stone-300 w-[250px]"><div class="flex justify-between"><div class="shipping">\u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438:</div><span class="pr-[2px]">+1000 \u20BD</span></div><div class="flex justify-between"><div class="summary font-bold">\u0418\u0442\u043E\u0433\u043E:</div><span class="font-bold">${ssrInterpolate(unref(cartStore).total)} \u20BD</span></div></div></div>`);
      } else {
        _push(`<div class="cart-empty text-center my-auto text-4xl text-stone-300 font-bold grid place-items-center">\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart-bb610d04.mjs.map
