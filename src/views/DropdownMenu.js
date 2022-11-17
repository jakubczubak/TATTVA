import { Nav } from "../navigation/Nav";

export function DropdownMenu() {
  const dropDownMenu = document.createElement("div");
  dropDownMenu.classList.add("drop-down-menu");
  dropDownMenu.setAttribute("tabindex", 0);

  dropDownMenu.innerHTML = `
    <ul>
    <li>Account</li>
    <li>My reservations</li>
    <li>Support</li>
    <li class='drop-down-menu-logout' >Logout 🚪</li>
    </ul>
    `;

  document.addEventListener("mouseup", function (e) {
    try {
      const container = document.querySelector(".drop-down-menu");
      if (!container.contains(e.target)) {
        container.remove();
      }
    } catch (error) {
      //Do nothing
    }
  });

  dropDownMenu.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const container = document.querySelector(".drop-down-menu");
      container.remove();
    }
  });

  const logoutBtn = dropDownMenu.querySelector(".drop-down-menu-logout");
  logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("userName");

    window.alert("Succesfully log out...");

    const main = document.querySelector("main");
    const nav = document.querySelector("nav");

    nav.remove();

    main.before(Nav());
  });

  return dropDownMenu;
}
