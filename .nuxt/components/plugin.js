import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  BlogItem1: () => import('../..\\components\\blog\\BlogItem1.vue' /* webpackChunkName: "components/blog-item1" */).then(c => wrapFunctional(c.default || c)),
  BlogItem2: () => import('../..\\components\\blog\\BlogItem2.vue' /* webpackChunkName: "components/blog-item2" */).then(c => wrapFunctional(c.default || c)),
  BlogSidebar: () => import('../..\\components\\blog\\BlogSidebar.vue' /* webpackChunkName: "components/blog-sidebar" */).then(c => wrapFunctional(c.default || c)),
  BlogSidebar2: () => import('../..\\components\\blog\\BlogSidebar2.vue' /* webpackChunkName: "components/blog-sidebar2" */).then(c => wrapFunctional(c.default || c)),
  InstagramArea: () => import('../..\\components\\instagram\\InstagramArea.vue' /* webpackChunkName: "components/instagram-area" */).then(c => wrapFunctional(c.default || c)),
  InstagramSliderItem: () => import('../..\\components\\instagram\\InstagramSliderItem.vue' /* webpackChunkName: "components/instagram-slider-item" */).then(c => wrapFunctional(c.default || c)),
  ProductBox1: () => import('../..\\components\\product-box\\ProductBox1.vue' /* webpackChunkName: "components/product-box1" */).then(c => wrapFunctional(c.default || c)),
  ProductBox2: () => import('../..\\components\\product-box\\ProductBox2.vue' /* webpackChunkName: "components/product-box2" */).then(c => wrapFunctional(c.default || c)),
  WidgetsShopSidebar: () => import('../..\\components\\widgets\\ShopSidebar.vue' /* webpackChunkName: "components/widgets-shop-sidebar" */).then(c => wrapFunctional(c.default || c)),
  WidgetsTimer: () => import('../..\\components\\widgets\\Timer.vue' /* webpackChunkName: "components/widgets-timer" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
