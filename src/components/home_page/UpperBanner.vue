<template>
  <div class="banner">
    <div class="parent">
      <img src="@/assets/images/banner-bg.jpg" alt="" />

      <div class="cont">
        <h3><span>Huge Saving</span> on UHD Televisoins</h3>
        <p class="hint">Sale up to 70% off on selected items*</p>
        <v-btn
          style="
            border-radius: 30px;
            text-transform: none;
            padding-bottom: 15px;
          "
          variant="outlined"
          class="py-1 px-10"
          >Shop Now</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  text-align: start;
  position: relative;
  .parent {
    height: 400px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .cont {
      position: absolute;
      color: white;
      padding: 20px 0 0 100px;
      left: 40px;
      top: 20px;
      width: 600px;
      h3 {
        font-size: 45px;
        font-weight: 900;
      }
      span {
        color: rgb(45, 251, 223);
      }
      .hint {
        margin: 20px 0 40px;
      }
    }
  }
}
// Media Queries
@media (max-width: 990px) {
  .banner {
    .parent {
      .cont {
        h3 {
          font-size: 35px;
        }
        width: 500px;
        left: 0;
      }
    }
  }
}
// Media Queries
@media (max-width: 767px) {
  .banner {
    .parent {
      height: 320px;
      .cont {
        padding-left: 20px;
        h3 {
          font-size: 35px;
        }
        width: 500px;
        left: 0;
        .hint {
          font-size: 14px;
        }
      }
    }
  }
}
// Media Queries
@media (max-width: 580px) {
  .banner {
    .parent {
      height: 250px;
      .cont {
        padding-left: 20px;
        padding-top: 20px;
        h3 {
          font-size: 24px;
        }
        width: 80%;
        left: 0;
        .hint {
          font-size: 12px !important;
          width: 130px !important;
          font-size: 11px !important;
        }
      }
    }
  }
}
</style>
