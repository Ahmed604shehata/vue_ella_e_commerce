<template>
  <div class="quick-view mt-16">
    <h1 class="mb-10 text-center">{{ $route.params.title }}</h1>
    <v-dialog v-model="dialog" max-width="900">
      <v-icon
        style="
          position: absolute;
          right: 2px;
          top: 2px;
          background-color: black;
          color: white;
          font-size: 18px;
          padding: 13px;
          z-index: 10;
          cursor: pointer;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content-card">
        <v-container fluid class="bg-white pt-10">
          <v-row>
            <v-col cols="12" md="7">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-100 bg-grey-lighten-4"
                alt=""
                height="500"
                v-if="!loading"
              />
              <v-skeleton-loader
                v-if="loading"
                type="image, image"
              ></v-skeleton-loader>
              <v-tabs center-active height="220" v-model="tab">
                <v-tab
                  class="mx-10 mt-10"
                  v-for="(img, i) in product.images"
                  :value="img"
                  :key="i"
                >
                  <img :src="img" width="100" height="100" alt="" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" sm="5" class="pt-0 pl-6 mt-8 mt-md-0">
              <v-skeleton-loader
                v-if="loading"
                type="article, article , article"
              ></v-skeleton-loader>
              <v-card
                v-if="!loading"
                elevation="0"
                style="text-transform: capitalize; text-align: start"
              >
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 18px;
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                  >({{ product.title }}) sample - {{ product.category }} for
                  sale</v-card-title
                >
                <div
                  class="rating-parent d-flex align-center"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-3"
                    size="x-small"
                    density="cobact"
                    style="width: 100%; text-align: start"
                  ></v-rating>
                  <span
                    class="mt-1"
                    style="color: rgb(96, 96, 96); font-size: 14px"
                    >Stock:{{ product.stock }}</span
                  >
                </div>
                <v-card-text
                  class="px-0"
                  style="color: rgb(96, 96, 96); font-size: 14px"
                  >{{ product.description }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="color: rgb(96, 96, 96); font-size: 14px"
                  >Brand:{{ product.brand }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="color: rgb(96, 96, 96); font-size: 14px"
                  >Availability:{{
                    product.stock > 0 ? "In Stock" : "Out Of Stock"
                  }}</v-card-text
                >
                <v-card-text class="pl-0 pt-0">
                  <del>{{ product.price }} </del> From
                  <span
                    class="text-red"
                    style="font-weight: 900; font-size: 16px"
                  >
                    {{
                      "$" +
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}
                  </span>
                </v-card-text>
                <v-card-text>Quantity</v-card-text>
                <div
                  class="counter"
                  style="
                    border-radius: 30px;
                    border: 1px solid #9999;
                    width: fit-content;
                  "
                >
                  <v-icon size="22" @click="quantity > 1 ? quantity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    min="1"
                    :value="quantity"
                    class="text-center py-3"
                    style="
                      border: none;
                      outline: none;
                      width: 60px;
                      font-size: 15px;
                    "
                  />
                  <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
                </div>
                <v-card-text class="px-0">
                  Subtotal: ${{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quantity
                  }}
                </v-card-text>
                <v-card-actions class="mt-7 w-100">
                  <v-btn
                    class="w-75 text-white"
                    density="compact"
                    variant="outline"
                    style="
                      height: 50px;
                      text-transform: none;
                      border-radius: 30px;
                      background-color: #000;
                    "
                    @click="addToCart(product)"
                    >Add To Card</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// closed after made dialog
// import { productsModule } from "@/stores/products";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  inject: ["Emitter"],

  components: {
    VSkeletonLoader,
  },
  data: () => ({
    dialog: false,
    loading: false,
    tab: "",
    quantity: 1,
    product: "",

    // product: {
    //   id: 6,
    //   title: "Calvin Klein CK One",
    //   description:
    //     "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    //   category: "fragrances",
    //   price: 49.99,
    //   discountPercentage: 0.32,
    //   rating: 4.85,
    //   stock: 17,
    //   tags: ["fragrances", "perfumes"],
    //   brand: "Calvin Klein",
    //   sku: "DZM2JQZE",
    //   weight: 5,
    //   dimensions: {
    //     width: 11.53,
    //     height: 14.44,
    //     depth: 6.81,
    //   },
    //   warrantyInformation: "5 year warranty",
    //   shippingInformation: "Ships overnight",
    //   availabilityStatus: "In Stock",
    //   reviews: [
    //     {
    //       rating: 5,
    //       comment: "Great value for money!",
    //       date: "2024-05-23T08:56:21.619Z",
    //       reviewerName: "Sophia Brown",
    //       reviewerEmail: "sophia.brown@x.dummyjson.com",
    //     },
    //     {
    //       rating: 3,
    //       comment: "Very disappointed!",
    //       date: "2024-05-23T08:56:21.619Z",
    //       reviewerName: "Madison Collins",
    //       reviewerEmail: "madison.collins@x.dummyjson.com",
    //     },
    //     {
    //       rating: 1,
    //       comment: "Poor quality!",
    //       date: "2024-05-23T08:56:21.619Z",
    //       reviewerName: "Maya Reed",
    //       reviewerEmail: "maya.reed@x.dummyjson.com",
    //     },
    //   ],
    //   returnPolicy: "No return policy",
    //   minimumOrderQuantity: 20,
    //   meta: {
    //     createdAt: "2024-05-23T08:56:21.619Z",
    //     updatedAt: "2024-05-23T08:56:21.619Z",
    //     barcode: "2210136215089",
    //     qrCode: "https://assets.dummyjson.com/public/qr-code.png",
    //   },
    //   images: [
    //     "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
    //     "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
    //     "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
    //   ],
    //   thumbnail:
    //     "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    // },
  }),
  // closed after made dialog
  // computed: {
  //   ...mapState(productsModule, ["singleProduct"]),
  // },

  methods: {
    ...mapActions(cartStore, ["addItem"]),

    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoadiong = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCard");
        this.Emitter.emit("showMsg", item.title);
        this.dialog = false;
      }, 1000);
    },
    // closed after made dialog
    // ...mapActions(productsModule, ["getSingleProduct"]),
  },

  //   methods: {
  // ...mapActions (cartStore, ["addItem"]),
  // addToCart (item) {
  // item.quantity = this.quantity;
  // this.btnLoading = true;

  // },
  // },

  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },

  // closed after made dialog
  // this is loading and get single product
  // async beforeMount() {
  //   this.loading = true;
  //   await this.getSingleProduct(1);
  //   this.loading = false;
  // },
};
</script>

<style>
.content-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(179, 179, 179);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(217, 217, 217);
  }
}
</style>
