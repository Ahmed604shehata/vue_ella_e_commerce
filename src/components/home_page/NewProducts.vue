<template>
  <div class="new-products pt-12">
    <div class="title d-flex align-center justify-space-between">
      <h2
        style="font-weight: 900; font-size: 30px; text-transform: uppercase"
        class="text-error mb-10 pl-9"
      >
        New cosmetics
      </h2>
      <router-link
        class="text-black mr-9"
        style="font-size: 14px"
        :to="{
          name: 'products_category',
          query: {
            title: categories[index].title,
            category: categories[index].route,
          },
        }"
      >
        Shop All</router-link
      >
    </div>
    <v-container fluid>
      <!-- start skeleton-loader -->
      <v-row>
        <v-col cols="7" v-if="!products.length" style="padding-top: 77px">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
          <!-- end skeleton-loader -->
        </v-col>
        <v-col cols="12" md="7" class="pt-14 order-1 order-md-0" v-else>
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            :autoplay="{ delay: 2000 }"
            :breakpoints="breakpoints"
            class="mb-9 px-5"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card
                elevation="0"
                class="pb-5 pl-10 mb-7"
                style="text-align: start"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent position-relative"
                    style="height: 325px; overflow: hidden"
                  >
                    <img
                      :src="
                        shownItem[item.title]
                          ? shownItem[item.title]
                          : item.thumbnail
                      "
                      class="w-100"
                      :style="`height:100%; transition:0.5s all ease-in-out; scale:${
                        isHovering ? 1.05 : 1
                      }; cursor:pointer;`"
                      alt=""
                      v-bind="props"
                    />
                    <v-btn
                      denssity="compact"
                      height="40"
                      width="100"
                      variant="outlined"
                      class="bg-white quick-view-btn"
                      style="
                        text-transform: none;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 30px;
                        border-color: 1px solid black;
                        font-size: 12px;
                        transition: 0.2s all ease-in-out;
                        opacity: 0;
                      "
                      @click="openQuickView(item)"
                      >Quick View</v-btn
                    >
                  </div>
                </v-hover>

                <!-- text in the curd content -->
                <v-card-text class="pl-0 pb-1">
                  {{
                    item.title.split(" ").length <= 8
                      ? item.title
                      : item.title.split(" ").slice(0, 8).join(" ")
                  }}
                  <br />
                  <!-- <div class="d-flex justify-space-between align-center">
                    <h3 class="py-3">{{ item.brand }}</h3>
                  </div> -->
                  <!-- {{
                    item.description + " " + item.title.split(" ").length <= 4
                      ? item.description
                      : item.description
                          .split(" ")
                          .slice(0, 4 - item.title.split(" ").length)
                          .join(" ")
                  }} -->
                </v-card-text>
                <!-- the tars of rating -->
                <v-rating
                  v-model="item.rating"
                  half-increments
                  readonly
                  color="yellow-darken-3"
                  size="x-small"
                  density="cobact"
                  style="width: 100%; text-align: start"
                ></v-rating>
                <!-- the salary of products -->
                <v-card-text class="pl-0 pt-0">
                  <del>{{ item.price }} </del> From
                  <span
                    class="text-red"
                    style="font-weight: 900; font-size: 16px"
                  >
                    {{
                      "$" +
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}
                  </span>
                </v-card-text>
                <!-- the small pictures under the curd -->
                <v-btn-toggle v-model="shownItem[item.title]">
                  <!-- pic >> it is element in the item.images -->
                  <v-btn
                    v-for="(pic, i) in item.images"
                    :value="pic"
                    :key="i"
                    size="x-small"
                    rounded="xl"
                    ripple="false"
                    class="pa-0"
                    @click="
                      $router.push({
                        name: 'product_details',
                        params: { productId: item.id },
                      })
                    "
                  >
                    <img
                      :src="pic"
                      alt=""
                      width="30"
                      height="30"
                      style="border-radius: 50%; border: 1px solid #779"
                    />
                  </v-btn>
                </v-btn-toggle>
                <div class="my-3">
                  <v-btn
                    density="combact"
                    class="py-3 px-12"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      border: 1px solid black;
                    "
                    @click="
                      $router.push({
                        name: 'products_details',
                        params: { productId: item.id },
                      })
                    "
                    variant="outline"
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </swiper-slide>
            <div class="swiper-prev"></div>
            <div class="swiper-next"></div>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="12" md="5">
          <img src="@/assets/images/vr-banner.webp" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
export default {
  inject: ["Emitter"],

  data: () => ({
    shownItem: {},
    // number of products in media query
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  }),
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },

  props: {
    products: {
      type: Array,
    },
    index: {
      type: Number,
    },
  },

  computed: {
    ...mapState(productsModule, ["categories"]),
  },

  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },

  // setup >> help in api
  setup() {
    return {
      // modules as variable
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.new-products {
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}
@media (max-width: 580px) {
  .new-products {
    .img-parent {
      height: 300px !important;
    }
    .swiper-button-next,
    .swiper-button-prev {
      top: 50%;
    }
  }
}
</style>
