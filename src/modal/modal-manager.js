import { Modal } from "../views/Modal";
import { Cart } from "../views/Cart";

export const modalManger = {
  createModal(value, acceptBtnFunction, declineBtnFunction) {
    const modalContainer = document.createElement("div");
    modalContainer.className = "modal-container";

    modalContainer.innerHTML = Modal({
      type: value.type,
      title: value.title,
      description: value.description,
      accept_btn: value.accept_btn,
      decline_btn: value.decline_btn,
    });

    document.body.appendChild(modalContainer);

    const acceptBtn = document.querySelector(".modal-accept");

    acceptBtn.addEventListener("click", acceptBtnFunction);

    const declineBtn = document.querySelector(".modal-decline");

    declineBtn.addEventListener("click", declineBtnFunction);

    const modalActive = document.querySelector(".modal");

    modalActive.focus();
    modalActive.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const modal = document.querySelector(".modal-container");
        modal.remove();
        document.body.style.overflow = "auto";
      }
    });

    const modalActiveContainer = document.querySelector(".modal-container");

    modalActiveContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-container")) {
        e.target.remove();
        document.body.style.overflow = "auto";
      }
    });

    document.body.style.overflow = "hidden";
  },

  keepShoping() {
    const modal = document.querySelector(".modal-container");
    modal.remove();
    document.body.style.overflow = "auto";
  },

  goToCart() {
    const modal = document.querySelector(".modal-container");
    modal.remove();
    document.body.style.overflow = "auto";

    const navigateEvent = new CustomEvent("navigate", {
      detail: () => Cart(),
    });

    document.body.dispatchEvent(navigateEvent);

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
};
