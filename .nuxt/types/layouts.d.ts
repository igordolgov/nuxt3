import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "products-layout"
declare module "C:/Users/IgorDolgov/shop/nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}