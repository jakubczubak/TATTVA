// Nav.js
import { Home } from "../views/Home";
import { RoomsList } from "../views/RoomsList";
import { Cart } from "../views/Cart";
import { TreatmentList } from "../views/TreatmentsList";
import { Login } from "../views/Login";
import { cartManager } from "../cart/cart-manager";

// wytwarzamy nawigacje na podstawie tej tablicy
const navItems = [
  { name: "Logo", component: Home, class: "logo" },
  { name: "Home", component: Home },
  { name: "Rooms List", component: RoomsList },
  { name: "Treatments List", component: TreatmentList },
  { name: "Login", component: Login, class: "login" },
  { name: "👜", component: Cart },
];

export function Nav() {
  const nav = document.createElement("nav");

  const navButtons = navItems.map((navItem) => {
    const navButton = document.createElement("button");
    navButton.setAttribute("type", "button");
    navButton.innerText = navItem.name;

    if (navItem.class == "login") {
      navButton.classList.add(navItem.class);
    }

    if (navItem.class == "logo") {
      navButton.classList.add(navItem.class);
      navButton.innerHTML = `
      <img  src=${require("../assets/tattva-spa-vector-logo.svg")} alt="Logo"/>
      `;
    }

    if (navItem.component == Cart) {
      navButton.innerHTML = `
      <img class="date-nights-img" src=${require("../assets/Bag_alt_light.svg")} alt="Shop bag icon"/>
      `;
      navButton.classList.add("shopping-cart");
    }

    navButton.addEventListener("click", () => {
      const navigateEvent = new CustomEvent("navigate", {
        detail: navItem.component,
      });

      document.body.dispatchEvent(navigateEvent);
    });

    return navButton;
  });

  nav.append(...navButtons);

  return nav;
}
