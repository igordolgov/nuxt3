import { b as useProductStore } from "../server.mjs";
import { useSSRContext } from "vue";
import "ofetch";
import "#internal/nitro";
import "hookable";
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
import "ufo";
import "vue/server-renderer";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    productStore.fill();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><title>SKSAVIA - Главная</title></head><div class="main-page text-center bg-white"><h1 class="text-xl sm_text-2xl pt-2">Приветствуем Вас на нашем сайте!</h1><h2 class="mb-3 text-lg italic">Надеемся, что Вы найдёте то, что искали</h2><img class="max-h-[78vh] mx-auto" src="https://dopobr.tularegion.ru/images/events/cover/cacb10296dcb9d7101b8b9b3d7e62459_big.jpg"></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-6099cab9.js.map
