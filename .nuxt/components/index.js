import { wrapFunctional } from './utils'

export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as BlogItem1 } from '../..\\components\\blog\\BlogItem1.vue'
export { default as BlogItem2 } from '../..\\components\\blog\\BlogItem2.vue'
export { default as BlogSidebar } from '../..\\components\\blog\\BlogSidebar.vue'
export { default as BlogSidebar2 } from '../..\\components\\blog\\BlogSidebar2.vue'
export { default as InstagramArea } from '../..\\components\\instagram\\InstagramArea.vue'
export { default as InstagramSliderItem } from '../..\\components\\instagram\\InstagramSliderItem.vue'
export { default as ProductBox1 } from '../..\\components\\product-box\\ProductBox1.vue'
export { default as ProductBox2 } from '../..\\components\\product-box\\ProductBox2.vue'
export { default as WidgetsShopSidebar } from '../..\\components\\widgets\\ShopSidebar.vue'
export { default as WidgetsTimer } from '../..\\components\\widgets\\Timer.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogItem1 = import('../..\\components\\blog\\BlogItem1.vue' /* webpackChunkName: "components/blog-item1" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogItem2 = import('../..\\components\\blog\\BlogItem2.vue' /* webpackChunkName: "components/blog-item2" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogSidebar = import('../..\\components\\blog\\BlogSidebar.vue' /* webpackChunkName: "components/blog-sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogSidebar2 = import('../..\\components\\blog\\BlogSidebar2.vue' /* webpackChunkName: "components/blog-sidebar2" */).then(c => wrapFunctional(c.default || c))
export const LazyInstagramArea = import('../..\\components\\instagram\\InstagramArea.vue' /* webpackChunkName: "components/instagram-area" */).then(c => wrapFunctional(c.default || c))
export const LazyInstagramSliderItem = import('../..\\components\\instagram\\InstagramSliderItem.vue' /* webpackChunkName: "components/instagram-slider-item" */).then(c => wrapFunctional(c.default || c))
export const LazyProductBox1 = import('../..\\components\\product-box\\ProductBox1.vue' /* webpackChunkName: "components/product-box1" */).then(c => wrapFunctional(c.default || c))
export const LazyProductBox2 = import('../..\\components\\product-box\\ProductBox2.vue' /* webpackChunkName: "components/product-box2" */).then(c => wrapFunctional(c.default || c))
export const LazyWidgetsShopSidebar = import('../..\\components\\widgets\\ShopSidebar.vue' /* webpackChunkName: "components/widgets-shop-sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyWidgetsTimer = import('../..\\components\\widgets\\Timer.vue' /* webpackChunkName: "components/widgets-timer" */).then(c => wrapFunctional(c.default || c))
