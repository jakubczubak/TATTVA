// Nav.js
import { Home } from "../views/Home";
import { RoomsList } from "../views/RoomsList";
import { Cart } from "../views/Cart";
import { TreatmentList } from "../views/TreatmentsList";

// wytwarzamy nawigacje na podstawie tej tablicy
const navItems = [
  { name: "Home", component: Home },
  { name: "Rooms List", component: RoomsList },
  { name: "Treatments List", component: TreatmentList },
  { name: "👜", component: Cart },
];

export function Nav() {
  const nav = document.createElement("nav");

  const navButtons = navItems.map((navItem) => {
    const navButton = document.createElement("button");
    navButton.setAttribute("type", "button");
    navButton.innerText = navItem.name;

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
