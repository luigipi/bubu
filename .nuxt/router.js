import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _93871636 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _d7971efe = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _784f8e1d = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _4d31c7df = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _3f21f3f4 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _b6731a18 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _622d17c3 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _06502956 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4883a4b3 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _5c97cdfa = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _68cb67c6 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _2da94649 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _1bacd68c = () => interopDefault(import('..\\pages\\blog\\blog-2.vue' /* webpackChunkName: "pages/blog/blog-2" */))
const _1bbaee0d = () => interopDefault(import('..\\pages\\blog\\blog-3.vue' /* webpackChunkName: "pages/blog/blog-3" */))
const _41e08103 = () => interopDefault(import('..\\pages\\blog\\blog-single-2.vue' /* webpackChunkName: "pages/blog/blog-single-2" */))
const _5fbf0a08 = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _c1d4843a = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _64e53dc4 = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _2a126f43 = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _4c16c303 = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _455ceb4e = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _4540bc4c = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _0c7a0906 = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _5c8ac3cc = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _9d61ec76 = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _67ac3c58 = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _6d136af4 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _414ef2a7 = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _551dff98 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _5501d096 = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _54e5a194 = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _54c97292 = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _7698ecd5 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _62fe991e = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _3ca8863f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _93871636,
    name: "404"
  }, {
    path: "/about-us",
    component: _d7971efe,
    name: "about-us"
  }, {
    path: "/blog",
    component: _784f8e1d,
    name: "blog"
  }, {
    path: "/cart",
    component: _4d31c7df,
    name: "cart"
  }, {
    path: "/coming-soon",
    component: _3f21f3f4,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _b6731a18,
    name: "contact-us"
  }, {
    path: "/faq",
    component: _622d17c3,
    name: "faq"
  }, {
    path: "/login",
    component: _06502956,
    name: "login"
  }, {
    path: "/my-account",
    component: _4883a4b3,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _5c97cdfa,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _68cb67c6,
    name: "register"
  }, {
    path: "/shop",
    component: _2da94649,
    name: "shop"
  }, {
    path: "/blog/blog-2",
    component: _1bacd68c,
    name: "blog-blog-2"
  }, {
    path: "/blog/blog-3",
    component: _1bbaee0d,
    name: "blog-blog-3"
  }, {
    path: "/blog/blog-single-2",
    component: _41e08103,
    name: "blog-blog-single-2"
  }, {
    path: "/cart/cart-2",
    component: _5fbf0a08,
    name: "cart-cart-2"
  }, {
    path: "/cart/empty-cart",
    component: _c1d4843a,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _64e53dc4,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _2a126f43,
    name: "my-account-account-details"
  }, {
    path: "/my-account/addresses",
    component: _4c16c303,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _455ceb4e,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _4540bc4c,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _0c7a0906,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _5c8ac3cc,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _9d61ec76,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _67ac3c58,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _6d136af4,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _414ef2a7,
    name: "product-product-single-2"
  }, {
    path: "/shop/shop-2",
    component: _551dff98,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _5501d096,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _54e5a194,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _54c97292,
    name: "shop-shop-5"
  }, {
    path: "/blog/:slug",
    component: _7698ecd5,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _62fe991e,
    name: "product-slug"
  }, {
    path: "/",
    component: _3ca8863f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
