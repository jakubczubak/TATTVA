// cart-manager.js

// JSON.stringify
// JSON.parse

import { modalManger } from "../modal/modal-manager";

const key = "IT_SPA_CART";

export const cartManager = {
  addItem(item) {
    modalManger.createModal(
      {
        type: "info",
        title: "You have added an item to your cart!",
        description: `1x ${item.name}`,
        accept_btn: "Keep shopping",
        decline_btn: "Go to cart",
      },
      modalManger.keepShoping,
      modalManger.goToCart
    );

    const cart = localStorage.getItem(key);

    if (cart === null) {
      const content = {
        [item.name]: { quantity: 1, item: item }, // ALBO: { ..., item }
      };

      const stringifiedContent = JSON.stringify(content);
      localStorage.setItem(key, stringifiedContent);
    } else {
      const parsedContent = JSON.parse(cart);

      if (parsedContent.hasOwnProperty(item.name)) {
        parsedContent[item.name].quantity += 1;
      } else {
        parsedContent[item.name] = { quantity: 1, item: item };
      }

      const stringifiedContent = JSON.stringify(parsedContent);
      localStorage.setItem(key, stringifiedContent);
    }

    cartManager.updateShoppingCartCounter();
  },

  removeItem(item) {
    const cart = localStorage.getItem(key);

    if (cart !== null) {
      const parsedContent = JSON.parse(cart);

      if (parsedContent.hasOwnProperty(item.name)) {
        const quantity = parsedContent[item.name].quantity;

        if (quantity > 1) {
          parsedContent[item.name].quantity -= 1;
        } else {
          delete parsedContent[item.name];
          // parsedContent[item.name] = undefined;
        }

        const stringifiedContent = JSON.stringify(parsedContent);
        localStorage.setItem(key, stringifiedContent);
      }
    }

    cartManager.updateShoppingCartCounter();
  },

  getAllItems() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return [];
    } else {
      const parsedContent = JSON.parse(cart);
      return Object.values(parsedContent);
    }
  },

  getTotal() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return 0;
    } else {
      const parsedContent = JSON.parse(cart);

      return Object.values(parsedContent) // [ { quantity: 2, item: {} }, { quantity: 3, item: {} }, ... ]
        .reduce((accumulator, cartEntry) => {
          return accumulator + cartEntry.quantity * cartEntry.item.price;
        }, 0);
    }
  },
  getTotalItems() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return 0;
    } else {
      const parsedContent = JSON.parse(cart);

      return Object.values(parsedContent) // [ { quantity: 2, item: {} }, { quantity: 3, item: {} }, ... ]
        .reduce((accumulator, cartEntry) => {
          return accumulator + cartEntry.quantity;
        }, 0);
    }
  },
  updateShoppingCartCounter() {
    let counter = cartManager.getTotalItems();
    const shoppingCartCounter = document.querySelector(
      ".shopping-cart-element"
    );

    if (counter == 0 && shoppingCartCounter != null) {
      shoppingCartCounter.remove();
    } else if (counter >= 1) {
      if (shoppingCartCounter) {
        shoppingCartCounter.innerHTML = `
        ${counter}
        `;
      } else {
        const shoppingCart = document.querySelector(".shopping-cart");
        const counterElement = document.createElement("div");
        counterElement.classList.add("shopping-cart-element");
        counterElement.innerHTML = `
        ${counter}
        `;
        shoppingCart.append(counterElement);
      }
    }
  },
};
