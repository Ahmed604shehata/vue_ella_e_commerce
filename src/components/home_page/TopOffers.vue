<template>
  <div class="top-offers bg-grey-lighten-4 py-9">
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          ms="6"
          md="4"
          lg="4"
          class="py-0 px-3 pr-lg-6 my-5 mt-sm-0"
          style="height: 270px"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="@/assets/images/headset.webp"
                :style="`width: 100% ;  height:100% ; cursor:pointer; transition: 0.6s all ease-in-out ; scale:${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>

        <v-col
          cols="12"
          ms="6"
          md="4"
          lg="4"
          class="py-0 px-3 pr-lg-6 my-5 mt-sm-0"
          style="height: 260px"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="@/assets/images/playstations.webp"
                :style="`width: 100% ;  height:100% ; cursor:pointer; transition: 0.6s all ease-in-out ; scale:${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>

        <v-col
          cols="12"
          ms="6"
          md="4"
          lg="4"
          class="py-0 my-5 mt-lg-0 mt-sm-0"
          style="height: 260px"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="@/assets/images/chairs.webp"
                :style="`width: 100% ; height:100% ; cursor:pointer; transition: 0.6s all ease-in-out ; scale:${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>

      <v-row class="mt-2" style="margin-bottom: 10px">
        <v-col cols="12" sm="6" md="" lg="" class="mt-3 px-3 pr-sm-5 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-2"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="@/assets/images/iphones.webp"
                :style="`width: 100% ;height:100% ; cursor:pointer; transition: 0.6s all ease-in-out ; scale:${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="6" md="" lg="" class="mt-3 pl-3 pl-sm-5 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-2"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="@/assets/images/laptops.webp"
                :style="`width: 100% ;height:100% ; cursor:pointer; transition: 0.6s all ease-in-out ; scale:${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
