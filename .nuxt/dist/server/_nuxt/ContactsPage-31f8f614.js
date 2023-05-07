import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
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
function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><head><title>SKSAVIA - Контакты</title></head><div class="news-page px-4"><div class="mx-auto lg_container"><h1 class="text-lg font-bold pt-2">Наши контакты:</h1><p>Кабардино-Балкарская Республика, г.Нарткала, ул.Кабардинская, д.62</p><p>Пн-Пт: 10:00-18:00</p><div class="flex"><div class="telephone mr-4" itemprop="telephone"><a href="tel:+7903425-30-68">+7(903)425-30-68</a></div><div class="email" itemprop="email"><a href="mailto:sksnartkala@mail.ru">sksnartkala@mail.ru</a></div></div></div><div class="maps mt-3"><iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&amp;ll=43.855033%2C43.558459&amp;mode=search&amp;oid=2498075644&amp;ol=biz&amp;source=mapframe&amp;utm_source=mapframe&amp;z=17.15" width="100%" height="555" frameborder="0"></iframe></div></div><!--]-->`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ContactsPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender]]);
export {
  ContactsPage as default
};
//# sourceMappingURL=ContactsPage-31f8f614.js.map
