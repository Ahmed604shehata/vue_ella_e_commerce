<template>
  <div class="products-swiper py-16">
    <div class="title d-flex align-center justify-space-between">
      <h2
        style="
          font-weight: 900;
          font-size: 30px;
          margin-bottom: 10px;
          padding-left: 5px;
          text-transform: uppercase;
        "
        :class="[`text-${title}`]"
        class="pl-9 mb-12"
      >
        {{ title }}
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
    <v-container fluid="" v-if="!products.length">
      <v-row>
        <v-col cols="12" style="padding-top: 77px">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
          <!-- end skeleton-loader -->
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :breakpoints="breakpoints"
      :loop="true"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card
          elevation="0"
          class="pb-2 pt-3 px-3 mx-4"
          style="text-align: start"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="img-parent position-relative"
              style="height: 200px; overflow: hidden"
            >
              <img
                :src="
                  shownItem[item.title] ? shownItem[item.title] : item.thumbnail
                "
                class="w-100"
                :style="`height:100%; transition:0.5s all ease-in-out; scale:${
                  isHovering ? 1.2 : 1
                }; cursor:pointer;`"
                alt=""
                v-bind="props"
              />
              <v-btn
                denssity="compact"
                height="40"
                width="60"
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

          <!-- text in the curd content [title , description] -->
          <v-card-text class="pl-0 pb-1">
            {{
              `(${item.title} ${item.description})`.length <= 40
                ? `(${item.title} ${item.description})`
                : `(${item.title} ${item.description})`.substring(0, 40) + ")"
            }}
            <br />
            <div class="d-flex justify-space-between align-center">
              <h3 class="py-3">{{ item.brand }}</h3>
            </div>
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
            <span class="text-red" style="font-weight: 900; font-size: 16px">
              {{
                "$" +
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
                )
              }}
            </span>
          </v-card-text>

          <!-- the small pictures under the curd -->
          <v-btn-toggle v-model="shownItem[item.title]" mandatory>
            <v-btn
              v-for="(pic, i) in item.images"
              :value="pic"
              :key="i"
              size="x-small"
              rounded="xl"
              ripple="false"
            >
              <img
                :src="pic"
                alt=""
                :color="pic"
                width="30"
                height="30"
                style="border-radius: 50%; border: 1px solid #779"
              />
            </v-btn>
          </v-btn-toggle>
          <div class="mt-5">
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
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
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
      767: {
        slidesPerView: 3,
      },
      990: {
        slidesPerView: 4,
      },
    },
  }),
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },

  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  // setup >> help in api
  setup() {
    return {
      // modules as variable
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
    routeTitle: {
      type: String,
    },
    titleCategory: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
};
</script>

<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    top: 43%;
    border: 2px solid black;
    border-radius: 50%;
    margin-right: 10px;
    &::after {
      font-size: 13px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(53, 53, 53);
      font-weight: 900;
    }
  }
}

.img-parent:hover {
  .quick-view-btn {
    opacity: 1 !important;
  }
}

@media (max-width: 580px) {
  .products-swiper {
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
