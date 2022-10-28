// it-spa.js
import "./it-spa.scss";

import { Home } from "./views/Home";
import { Nav } from "./navigation/Nav"; // pamietaj o dodaniu importow!
import { Footer } from "./views/Footer.js";




const main = document.querySelector("main");

// na start podczepiamy nawigacje
main.before(Nav());
// ...oraz widok Home zeby nie bylo pustej strony

main.append(Home());

main.after(Footer());


document.body.addEventListener("navigate", (event) => {
  // ROWNOZNACZNE Z: const Component = event.detail;
  const { detail: Component } = event;

  main.innerHTML = "";
  main.append(Component());
});
