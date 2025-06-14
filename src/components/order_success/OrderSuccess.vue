<template>
  <div class="order-success">
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card class="text-center">
        <div class="text-center">
          <v-icon
            size="75"
            class="my-2"
            color="green"
            style="
              background-color: white;
              color: green;
              width: 100px;
              height: 100px;
              border-radius: 50%;
              font-size: 76px;
              border: 1px solid green;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title
          style="font-size: 30px; font-weight: bold; color: rgb(93, 93, 93)"
          >Order Placed Successfuly!</v-card-title
        >
        <v-card-text style="font-size: 17px; color: rgb(134, 134, 134)"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe
          temporibus quidem inventore eligendi animi, rem obcaecati vero,
          incidunt illo culpa facere. Beatae autem labore voluptatum, debitis
          iure accusamus praesentium.</v-card-text
        >
        <v-card-actions class="mt-5 justify-center">
          <v-btn variant="elevated" color="blue" @click="resetData"
            >Got it!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  data: () => ({
    dialog: false,
  }),
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit("close_popup");
        }, 200);
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ["resetItems"]),
    resetData() {
      this.resetItems();
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
  props: {
    popup: {
      type: Boolean,
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>
