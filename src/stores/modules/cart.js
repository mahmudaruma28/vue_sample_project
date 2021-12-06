export default {
  namespaced: true,
  state: {
    cartProducts: [],
  },
  getters: {
    getCartProducts: (state) => {
      return state.cartProducts;
    },
    getCartItemsCount: (state) => {
      let totalQunatity = 0;
      // for (let i = 0; i < state.cartProducts.length; i++) {
      //   totalQunatity += state.cartProducts[i].quantity;
      // }
      // return totalQunatity;
      // state.cartProducts.map(function (item) {
      //   return (totalQunatity += item.quantity);
      // });
      state.cartProducts.map((item) => (totalQunatity += item.quantity));
      return totalQunatity;
    },
    hasInCart: (state) => (product) => {
      return state.cartProducts.some((item) => item.productId === product.id);
    },
  },
  mutations: {
    addToCart(state, product) {
      if (state.cartProducts.find((item) => item.productId === product.id)) {
        state.cartProducts.map((item) =>
          item.productId === product.id ? item.quantity++ : item
        );
      } else {
        state.cartProducts.push({
          productId: product.id,
          image: product.image,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, product) {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.productId !== product.id
      );
    },
    increaseQuantity(state, productId) {
      state.cartProducts.map((item) =>
        item.productId === productId ? item.quantity++ : item
      );
    },
    decreaseQuantity(state, productId) {
      if (
        state.cartProducts.find((item) => item.productId === productId)
          .quantity == 1
      ) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.productId !== productId
        );
      }
      state.cartProducts.map((item) =>
        item.productId === productId ? item.quantity-- : item
      );
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, product) {
      commit("removeFromCart", product);
    },
    increaseQuantity({ commit }, productId) {
      commit("increaseQuantity", productId);
    },
    decreaseQuantity({ commit }, productId) {
      commit("decreaseQuantity", productId);
    },
  },
};
