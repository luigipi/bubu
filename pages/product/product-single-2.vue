<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
        <div class="container ">
            <div class="row">
                <div class="col-lg-12">
                    <div class="common_banner_text">
                        <h2>Shop</h2>
                        <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Product Single Area -->
    <section id="product_single_one" class="ptb-100">
        <div class="container">
            <div class="row area_boxed">
                <div class="col-lg-4">
                    <div class="product_single_one_img">
                        <swiper class="swiper product-single-2-slider" :options="swiperOption">
                            <swiper-slide>
                                <img :src="require('@/assets/img/product-image/dress1.png')" alt="img" />
                            </swiper-slide>
                            <swiper-slide>
                                <img :src="require('@/assets/img/product-image/dress2.png')" alt="img" />
                            </swiper-slide>
                            <swiper-slide>
                                <img :src="require('@/assets/img/product-image/dress3.png')" alt="img" />
                            </swiper-slide>
                            <swiper-slide>
                                <img :src="require('@/assets/img/product-image/dress4.png')" alt="img" />
                            </swiper-slide>
                            <swiper-slide>
                                <img :src="require('@/assets/img/product-image/port3.jpg')" alt="img" />
                            </swiper-slide>
                            <swiper-slide>
                                <img :src="require('@/assets/img/product-image/port1.jpg')" alt="img" />
                            </swiper-slide>
                            <swiper-slide>
                                <img :src="require('@/assets/img/product-image/port2.jpg')" alt="img" />
                            </swiper-slide>
      
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>

                        </swiper>

                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="product_details_right_one">
                        <div class="modal_product_content_one">
                            <h3 v-if="this.$route.params.slug">{{this.$route.params.slug}}</h3>
                            <h3 v-else>Black fashion handbag JI9023</h3>

                            <div class="reviews_rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span>(2 Customer Review)</span>
                            </div>
                            <h4>$317.76 <del>$456.43</del> </h4>
                            <p>Standard dummy text ever since the 1500s, standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen.
                            </p>
                            <div class="customs_selects">
                                <select name="product" class="customs_sel_box">
                                    <option value="size">Size</option>
                                    <option value="xl">XL</option>
                                    <option value="small">S</option>
                                    <option value="medium">M</option>
                                    <option value="large">L</option>
                                </select>
                            </div>
                            <div class="variable-single-item">
                                <span>Color</span>
                                <div class="product-variable-color">
                                    <label for="modal-product-color-red1">
                                        <input name="modal-product-color" id="modal-product-color-red1"
                                            class="color-select" type="radio" checked="">
                                        <span class="product-color-red"></span>
                                    </label>
                                    <label for="modal-product-color-tomato2">
                                        <input name="modal-product-color" id="modal-product-color-tomato2"
                                            class="color-select" type="radio">
                                        <span class="product-color-tomato"></span>
                                    </label>
                                    <label for="modal-product-color-green3">
                                        <input name="modal-product-color" id="modal-product-color-green3"
                                            class="color-select" type="radio">
                                        <span class="product-color-green"></span>
                                    </label>
                                    <label for="modal-product-color-light-green4">
                                        <input name="modal-product-color" id="modal-product-color-light-green4"
                                            class="color-select" type="radio">
                                        <span class="product-color-light-green"></span>
                                    </label>
                                    <label for="modal-product-color-blue5">
                                        <input name="modal-product-color" id="modal-product-color-blue5"
                                            class="color-select" type="radio">
                                        <span class="product-color-blue"></span>
                                    </label>
                                    <label for="modal-product-color-light-blue6">
                                        <input name="modal-product-color" id="modal-product-color-light-blue6"
                                            class="color-select" type="radio">
                                        <span class="product-color-light-blue"></span>
                                    </label>
                                </div>
                            </div>
                            <form id="product_count_form_two">
                                <div class="product_count_one">
                                    <b-form-spinbutton id="sb-inline" v-model="value" inline class="border-0"></b-form-spinbutton>
                                </div>
                            </form>
                            <div class="links_Product_areas">
                                <ul>
                                    <li>
                                        <nuxt-link to="/my-account/wishlist" class="action wishlist" title="Wishlist"><i class="far fa-heart"></i>Add To Wishlist</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/my-account/compare" class="action compare" title="Compare"><i class="fas fa-exchange-alt"></i>Add To Compare</nuxt-link>
                                    </li>
                                </ul>
                                <nuxt-link to="/cart/cart-2" class="theme-btn-one btn-black-overlay btn_sm">Add To Cart</nuxt-link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="product_details_tabs">
                        <b-tabs>
                            <b-tab title="Description" active id="description">
                                <div class="product_description">
                                    <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac
                                        diam sit amet quam vehicula elementum sed sit amet dui.
                                        Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed,
                                        convallis at tellus. Sed porttitor lectus nibh.
                                        Donec sollicitudin molestie malesuada. Vivamus magna justo,
                                        lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan
                                        id imperdiet et, porttitor at sem.</p>
                                    <ul>
                                        <li>Vivamus magna justo, lacinia eget consectetur sed</li>
                                        <li>Curabitur aliquet quam id dui posuere blandit</li>
                                        <li>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar </li>
                                    </ul>
                                    <p>Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum
                                        porta.
                                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum
                                        porta. Curabitur arcu erat, accumsan id imperdiet et,
                                        Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                        porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                    </p>
                                </div>
                            </b-tab>

                            <b-tab title="Additional Information" id="additional">
                                <div class="product_additional">
                                    <ul>
                                        <li>Weight: <span>400 g</span></li>
                                        <li>Dimensions: <span>10 x 10 x 15 cm</span></li>
                                        <li>Materials: <span> 60% cotton, 40% polyester</span></li>
                                        <li>Other Info: <span> American heirloom jean shorts pug seitan letterpress</span></li>
                                    </ul>
                                </div>
                            </b-tab>

                            <b-tab title="Reviews" id="review">
                                <div class="product_reviews">
                                    <ul>
                                        <li class="media">
                                            <div class="media-img">
                                                <img :src="require('@/assets/img/user/user1.png')" alt="img">
                                            </div>
                                            <div class="media-body">
                                                <div class="media-header">
                                                    <div class="media-name">
                                                        <h4>Sara Anela</h4>
                                                        <p>5 days ago</p>
                                                    </div>
                                                    <div class="post-share">
                                                        <a href="#!" class="replay">Replay</a>
                                                        <a href="#!" class="">Report</a>
                                                    </div>
                                                </div>
                                                <div class="media-pragraph">
                                                    <div class="product_review_strat">
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                    </div>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                        scelerisque Praesent sapien massa, convallis a pellentesque nec,
                                                        egestas non nisi. Cras ultricies ligula sed magna dictum porta.
                                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                                        dui.
                                                        Vivamus magna justo.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="media">
                                            <div class="media-img">
                                                <img :src="require('@/assets/img/user/user2.png')" alt="img">
                                            </div>
                                            <div class="media-body">
                                                <div class="media-header">
                                                    <div class="media-name">
                                                        <h4>Sara Anela</h4>
                                                        <p>5 days ago</p>
                                                    </div>
                                                    <div class="post-share">
                                                        <a href="#!" class="replay">Replay</a>
                                                        <a href="#!" class="">Report</a>
                                                    </div>
                                                </div>
                                                <div class="media-pragraph">
                                                    <div class="product_review_strat">
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                    </div>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                        scelerisque Praesent sapien massa, convallis a pellentesque nec,
                                                        egestas non nisi. Cras ultricies ligula sed magna dictum porta.
                                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                                        dui.
                                                        Vivamus magna justo.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="media">
                                            <div class="media-img">
                                                <img :src="require('@/assets/img/user/user3.png')" alt="img">
                                            </div>
                                            <div class="media-body">
                                                <div class="media-header">
                                                    <div class="media-name">
                                                        <h4>Sara Anela</h4>
                                                        <p>5 days ago</p>
                                                    </div>
                                                    <div class="post-share">
                                                        <a href="#!" class="replay">Replay</a>
                                                        <a href="#!" class="">Report</a>
                                                    </div>
                                                </div>
                                                <div class="media-pragraph">
                                                    <div class="product_review_strat">
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                        <span><a href="#!"><i class="fas fa-star"></i></a></span>
                                                    </div>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                        scelerisque Praesent sapien massa, convallis a pellentesque nec,
                                                        egestas non nisi. Cras ultricies ligula sed magna dictum porta.
                                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                                        dui.
                                                        Vivamus magna justo.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <!-- Related Product -->
    <section id="related_product" class="pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center_heading">
                        <h2>You Might Also Like</h2>
                        <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="productItem in productItems" :key="productItem.id">
                    <ProductBox1
                        :productImg1='productItem.productImg1'
                        :productImg2='productItem.productImg2'
                        :productTagClass='productItem.productTagClass'
                        :productTag='productItem.productTag'
                        :productTitle='productItem.productTitle'
                        :productPrice='productItem.productPrice'
                    />
                </div>
            </div>
        </div>
    </section>
      
    <!-- Instagram Arae -->
    <InstagramArea />
  </div>
</template>

<script>

import ProductBox1 from '../../components/product-box/ProductBox1'
import InstagramArea from '../../components/instagram/InstagramArea'

export default {
    name: 'product-single-2',
    components: {
        ProductBox1,
        InstagramArea,
    },
    data() {
        return {

            title: this.$route.params.slug,

            // Product details Popup slider 
            swiperOption: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
                loop: true,
                mousewheel: true,
                keyboard: {
                    enabled: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                autoplay: true,
            },

            // Product Items Data 
        productItems: [
            {
                id: 1,
                productImg1: require('assets/img/product-image/dress1.png'),
                productImg2: require('assets/img/product-image/dress1.png'),
                productTagClass: '',
                productTag: '',
                productTitle: 'Black T-Shirt For Woman',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 38.50,
                totalPrice: 180.00,
                quantity: 1
            },
            {
                id: 2,
                productImg1: require('assets/img/product-image/dress2.png'),
                productImg2: require('assets/img/product-image/dress2.png'),
                productTagClass: 'new',
                productTag: 'new',
                productTitle: 'T-Shirt Form Girls',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 738.50,
                totalPrice: 130.00,
                quantity: 1
            },
            {
                id: 3,
                productImg1: require('assets/img/product-image/dress4.png'),
                productImg2: require('assets/img/product-image/dress4.png'),
                productTagClass: 'hot',
                productTag: 'hot',
                productTitle: 'White Black Line Dress',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 50.50,
                totalPrice: 160.00,
                quantity: 1
            },
            {
                id: 4,
                productImg1: require('assets/img/product-image/dress1.png'),
                productImg2: require('assets/img/product-image/dress1.png'),
                productTagClass: '',
                productTag: '',
                productTitle: 'Blue Dress For Woman',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 738.50,
                totalPrice: 320.00,
                quantity: 1
            },
            {
                id: 5,
                productImg1: require('assets/img/product-image/port1.jpg'),
                productImg2: require('assets/img/product-image/port1.jpg'),
                productTagClass: 'new',
                productTag: 'new',
                productTitle: 'Black T-Shirt For Woman',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 99.50,
                totalPrice: 155.00,
                quantity: 1
            },
            {
                id: 6,
                productImg1: require('assets/img/product-image/port2.jpg'),
                productImg2: require('assets/img/product-image/port2.jpg'),
                productTagClass: 'hot',
                productTag: 'hot',
                productTitle: 'Blue Dress For Woman',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 738.50,
                totalPrice: 320.00,
                quantity: 1
            },
            {
                id: 7,
                productImg1: require('assets/img/product-image/port3.jpg'),
                productImg2: require('assets/img/product-image/port3.jpg'),
                productTagClass: 'new',
                productTag: 'new',
                productTitle: 'T-Shirt Form Girls',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 48.50,
                totalPrice: 200.00,
                quantity: 1
            },
            {
                id: 8,
                productImg1: require('assets/img/product-image/port3.jpg'),
                productImg2: require('assets/img/product-image/port3.jpg'),
                productTagClass: '',
                productTag: '',
                productTitle: 'T-Shirt Form Girls',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 738.50,
                totalPrice: 80.00,
                quantity: 1
            },
            {
                id: 9,
                productImg1: require('assets/img/product-image/port1.jpg'),
                productImg2: require('assets/img/product-image/port1.jpg'),
                productTagClass: 'new',
                productTag: 'new',
                productTitle: 'Blue Dress For Woman',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 300,
                totalPrice: 320.00,
                quantity: 1
            },
            {
                id: 10,
                productImg1: require('assets/img/product-image/port3.jpg'),
                productImg2: require('assets/img/product-image/port3.jpg'),
                productTagClass: 'new',
                productTag: 'new',
                productTitle: 'Black T-Shirt For Woman',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 738.50,
                totalPrice: 330.00,
                quantity: 1
            },
            {
                id: 11,
                productImg1: require('assets/img/product-image/port2.jpg'),
                productImg2: require('assets/img/product-image/port2.jpg'),
                productTagClass: 'hot',
                productTag: 'hot',
                productTitle: 'T-Shirt Form Girls',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 328,
                totalPrice: 320.00,
                quantity: 1
            },
            {
                id: 12,
                productImg1: require('assets/img/product-image/dress1.png'),
                productImg2: require('assets/img/product-image/dress2.png'),
                productTagClass: 'new',
                productTag: 'new',
                productTitle: 'T-Shirt Form Girls',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 738.50,
                totalPrice: 320.00,
                quantity: 1
            },
            {
                id: 13,
                productImg1: require('assets/img/product-image/dress2.png'),
                productImg2: require('assets/img/product-image/dress4.png'),
                productTagClass: 'new',
                productTag: 'new',
                productTitle: 'Blue Dress For Woman',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 738.50,
                totalPrice: 320.00,
                quantity: 1
            },
            {
                id: 14,
                productImg1: require('assets/img/product-image/port1.jpg'),
                productImg2: require('assets/img/product-image/port1.jpg'),
                productTagClass: 'hot',
                productTag: 'hot',
                productTitle: 'Black T-Shirt For Woman',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 738.50,
                totalPrice: 320.00,
                quantity: 1
            },
            {
                id: 15,
                productImg1: require('assets/img/product-image/port2.jpg'),
                productImg2: require('assets/img/product-image/port2.jpg'),
                productTagClass: 'new',
                productTag: 'new',
                productTitle: 'T-Shirt Form Girls',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 158.50,
                totalPrice: 320.00,
                quantity: 1
            },
            {
                id: 16,
                productImg1: require('assets/img/product-image/port3.jpg'),
                productImg2: require('assets/img/product-image/port3.jpg'),
                productTagClass: 'hot',
                productTag: 'hot',
                productTitle: 'White Black Line Dress',
                productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                productPrice: 18.50,
                totalPrice: 320.00,
                quantity: 1
            }
        ],

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                text: 'Home',
                to: '/'
                },
                {
                text: 'Product Single',
                to: '/product'
                }
            ],

            // Product Quanity Increment/ Decrement Data 
            value: 1
        }
    },

    // Page head() Title, description for SEO 
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Shop page - shop with bubu Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>

<style>

</style>