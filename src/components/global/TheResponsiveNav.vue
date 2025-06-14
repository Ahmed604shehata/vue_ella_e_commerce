<template>
  <div class="responsive_nav">
    <v-app-bar>
      <v-container fluid>
        <v-row>
          <v-col
            cols="4"
            class="d-flex align-center justify-center"
            style="gap: 10px"
          >
            <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
            <svg
              data-icon="search"
              class="ml-5"
              viewBox="0 0 512 512"
              width="18"
            >
              <path
                d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
              ></path>
            </svg>
          </v-col>
          <v-col cols="4" class="d-flex align-center justify-center">
            <img
              src="@/assets/images/footer-logo.webp"
              class=""
              alt=""
              @click="$router.push({ name: 'home' })"
              style="cursor: pointer; width: 130px"
            />
          </v-col>
          <v-col cols="4" class="d-flex align-center justify-center">
            <img
              src="@/assets/SVGS/account.svg"
              class="mr-7"
              width="23px"
              alt=""
            />
            <svg
              viewBox="0 0 30 30"
              class="icon icon-cart"
              enable-background="new 0 0 30 30"
              width="23px"
              @click="openCard"
              style="cursor: pointer"
            >
              <g>
                <g>
                  <path
                    d="M20,6V5c0-2.761-2.239-5-5-5s-5,2.239-5,5v1H4v24h22V6H20z M12,5c0-1.657,1.343-3,3-3s3,1.343,3,3v1h-6V5z M24,28H6V8h4v3    h2V8h6v3h2V8h4V28z"
                  ></path>
                </g>
              </g>
            </svg>
            <v-badge
              location="right top"
              :content="cartItems.length"
              v-if="cartItems.length"
              offsetY="-7"
              color="black"
            ></v-badge>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
// import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
import { cartStore } from "@/stores/cart";
export default {
  inject: ["Emitter"],
  methods: {
    openCard() {
      this.Emitter.emit("openCard");
    },
    openMenu() {
      this.Emitter.emit("openMenu");
    },
  },

  computed: {
    // ...mapState(productsModule, ["categories"]),
    ...mapState(cartStore, ["cartItems"]),
  },
};
</script>
