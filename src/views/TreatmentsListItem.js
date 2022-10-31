import { Button } from "../common/Button";
import { TreatmentDetails } from "./TreatmentDetails";
import { cartManager } from "../cart/cart-manager";

export function TreatmentListItem(treatment) {
  const li = document.createElement("li");
  li.classList.add("treatmet-item");

  const readMoreButton = Button("Read more...", () => {
    const navigateEvent = new CustomEvent("navigate", {
      detail: () => TreatmentDetails(treatment.id),
    });

    document.body.dispatchEvent(navigateEvent);
  });

  const addToCartButton = Button("ADD TO CART", () => {
    cartManager.addItem(treatment);
  });

  li.innerHTML = `
    <div class='treatmet-item-image'>
    <img src=${require("../assets/Afrodyta_spa.jpg")} alt='Room photo'/>
    </div>
    <div class='treatmet-item-info'>
    <h4>${treatment.name}</h4>

    <div class='treatmet-item-info-read-more-btn'></div>

    <strong class='treatmet-item-info-price'>${treatment.price.toFixed(
      2
    )} PLN</strong>

    <div class='treatmet-item-info-add-to-cart-btn'></div>
    </div>
  
    `;

  li.querySelector(".treatmet-item-info-read-more-btn").append(readMoreButton);

  li.querySelector(".treatmet-item-info-add-to-cart-btn").append(
    addToCartButton
  );
  return li;
}
