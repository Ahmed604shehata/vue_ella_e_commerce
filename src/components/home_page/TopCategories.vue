<template>
  <div class="top_cat">
    <!-- start offer banner  -->
    <div class="cyber-banner">
      <img src="@/assets/images/cyber-banner.webp" class="w-100" alt="" />
    </div>
    <!-- end offer banner  -->
    <!-- start categories -->
    <div class="categories pt-13">
      <!-- the header of categories -->
      <div class="title d-flex justify-center align-center mb-5">
        <h3
          class="text-center flex-grow-1"
          style="font-weight: 900; font-size: 20px"
        >
          Top Categories
        </h3>
      </div>
      <!-- start products -->
      <v-container fluid>
        <v-row>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="item in categories"
            :key="item.title"
          >
            <v-card class="text-center py-2 px-4" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent"
                  style="
                    overflow: hidden;
                    width: 100%;
                    height: 200px;
                    border-radius: 50%;
                  "
                >
                  <img
                    :src="item.image"
                    alt=""
                    v-bind="props"
                    :style="`cursor: pointer; width:100%; height:100% ;transition: 0.5s all ease-in-out; scale:${
                      isHovering ? 1.05 : 1
                    } `"
                  />
                </div>
              </v-hover>
              <v-card-text>{{ item.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- end categories -->
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Mobile Phone",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "Labtops",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "TVS",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "PCs",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "Audio & Video",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },
      {
        title: "Gaming",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "Home Appliances",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
      },
      {
        title: "Kitchen",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },
      {
        title: "Cameras",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },
      {
        title: "Consumables",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },
      {
        title: "Smart Homes",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },
      {
        title: "Accessories",
        image:
          " https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
  }),
};
</script>
