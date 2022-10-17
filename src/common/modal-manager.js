import { Modal } from "./modal";

export function createModal(type, title, description, accept_btn, decline_btn) {
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container";

  modalContainer.innerHTML = Modal({
    type: type,
    title: title,
    description: description,
    accept_btn: accept_btn,
    decline_btn: decline_btn,
  });

  document.body.appendChild(modalContainer);

  const closeModalIcon = document.querySelector(".modal-close-icon");

  closeModalIcon.addEventListener("click", () => {
    const modal = document.querySelector(".modal-container");
    modal.remove();
    document.body.style.overflow = "auto";
  });

  const declineBtn = document.querySelector(".modal-decline");

  declineBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal-container");
    modal.remove();
    document.body.style.overflow = "auto";
  });

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
}
