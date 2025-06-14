import { defineStore } from "pinia";
export const cartStore = defineStore("cartStore", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addItem(item) {
      // this function when click add to card to increase quantity of number of element
      let exists = false;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == item.id) {
          this.cartItems[i].quantity += item.quantity;
          exists = true;
          break;
        }
      }
      if (!exists) {
        this.cartItems.push(JSON.parse(JSON.stringify(item)));
      }
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
      // console.log(this.cartItems);
    },
    getCartItem() {
      if (localStorage.getItem("cart-items")) {
        this.cartItems = JSON.parse(localStorage.getItem("cart-item"));
      }
    },
    deleteItem(id) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == id) {
          this.cartItems.splice(i, 1);
        }
      }
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    setTotalStorage() {
      localStorage.setItem("cart-item", JSON.stringify(this.cartItems));
    },
    restItem() {
      this.cartItems = [];
      localStorage.removeItem("cart-items");
    },
  },
});

// geatCrtItems() {
//   if (localStorage.getItem("cart-items")) {
//   this.cartItems = JSON.parse(localStorage.getItem("cart-items"));
//   }
//   console.log(this.cartItems);
//   },

//   });
