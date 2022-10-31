// it-spa.js
import "./it-spa.scss";

import { Home } from "./views/Home";
import { Nav } from "./navigation/Nav"; // pamietaj o dodaniu importow!
import { Footer } from "./views/Footer.js";
import { cartManager } from "./cart/cart-manager";

const main = document.querySelector("main");

// na start podczepiamy nawigacje
main.before(Nav());
// ...oraz widok Home zeby nie bylo pustej strony

main.append(Home());

main.after(Footer());

cartManager.updateShoppingCartCounter(); // aktualizacja ilości elementów w koszyku po odświeżeniu strony

document.body.addEventListener("navigate", (event) => {
  // ROWNOZNACZNE Z: const Component = event.detail;
  const { detail: Component } = event;

  main.innerHTML = "";
  main.append(Component());
});
