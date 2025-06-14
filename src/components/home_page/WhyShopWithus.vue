<template>
  <div class="shop-withus py-14">
    <div class="title">
      <h2 class="text-center mb-5"><span>Why Shop</span> With Us?</h2>
    </div>
    <c-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent">
              <img src="@/assets/images/free-shipping.png" alt="" />
            </div>
          </v-card>
          <v-card-title
            style="
              white-space: pre-wrap;
              line-height: 1.2;
              color: white;
              font-weight: 700;
            "
          >
            Free Shopping On First Order
          </v-card-title>
          <v-card-text class="pb-0" style="font-size: 15px">
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            <a href="#" style="color: white; font-size: 14px">learn more</a>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent">
              <img src="@/assets/images/weekly-flash-sales.png" alt="" />
            </div>
          </v-card>
          <v-card-title
            style="
              white-space: pre-wrap;
              line-height: 1.2;
              color: white;
              font-weight: 700;
            "
          >
            Anual Payment Discount
          </v-card-title>
          <v-card-text class="pb-0" style="font-size: 15px">
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            <a href="#" style="color: white; font-size: 14px">learn more</a>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent">
              <img src="@/assets/images/cash-back.png" alt="" />
            </div>
          </v-card>
          <v-card-title
            style="
              white-space: pre-wrap;
              line-height: 1.2;
              color: white;
              font-weight: 700;
            "
          >
            Free Shopping On First Order
          </v-card-title>
          <v-card-text class="pb-0" style="font-size: 15px">
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            <a href="#" style="color: white; font-size: 14px">learn more</a>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent">
              <img src="@/assets/images/discount.png" alt="" />
            </div>
          </v-card>
          <v-card-title
            style="
              white-space: pre-wrap;
              line-height: 1.2;
              color: white;
              font-weight: 700;
            "
          >
            Free Shopping On First Order
          </v-card-title>
          <v-card-text class="pb-0" style="font-size: 15px">
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            <a href="#" style="color: white; font-size: 14px">learn more</a>
          </v-card-text>
        </v-col>
      </v-row>
    </c-container>
  </div>
</template>

<style lang="scss">
.shop-withus {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-repeat: no-repe at;
  background-size: cover;
  h2 {
    color: white;
    font-size: 30px;
    font-weight: 900;
    span {
      color: rgb(45, 251, 223);
    }
  }
}
</style>
