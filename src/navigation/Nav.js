// Nav.js
import { Home } from "../views/Home";
import { RoomsList } from "../views/RoomsList";
import { Cart } from "../views/Cart";
import { TreatmentList } from "../views/TreatmentsList";
import { Login } from "../views/Login";
import { DropdownMenu } from "../views/DropdownMenu";
import { QuickSummary } from "../views/QuickSummary";

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
      let loggedUser = sessionStorage.getItem("userName");

      if (loggedUser) {
        navButton.innerText = "Hi, " + loggedUser + " 👋";
        navButton.classList.add("logged-user");

        navButton.addEventListener("click", () => {
          const loggedUserBtn = document.querySelector(".logged-user");
          loggedUserBtn.append(DropdownMenu());
          const container = document.querySelector(".drop-down-menu");
          container.focus();
        });
      } else {
        navButton.classList.add(navItem.class);

        navButton.addEventListener("click", () => {
          const main = document.querySelector("main");
          main.append(Login());
          document.body.style.overflow = "hidden";
        });
      }
    } else {
      navButton.addEventListener("click", () => {
        const navigateEvent = new CustomEvent("navigate", {
          detail: navItem.component,
        });

        document.body.dispatchEvent(navigateEvent);
      });
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

      navButton.addEventListener("mouseover", () => {
        const isExist = navButton.querySelector(".quick-summary");

        if (isExist) {
          //do nothing
        } else {
          navButton.append(QuickSummary());
        }
      });

      navButton.addEventListener("mouseleave", () => {
        navButton.querySelector(".quick-summary").remove();
      });
    }

    return navButton;
  });

  nav.append(...navButtons);

  return nav;
}
