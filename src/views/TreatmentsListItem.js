import { Button } from "../common/Button";
import { TreatmentDetails } from "./TreatmentDetails";
import { cartManager } from "../cart/cart-manager";

export function TreatmentListItem(treatment) {
  const li = document.createElement("li");

  const readMoreButton = Button("Read more", () => {
    const navigateEvent = new CustomEvent("navigate", {
      detail: () => TreatmentDetails(treatment.id),
    });

    document.body.dispatchEvent(navigateEvent);
  });

  const addToCartButton = Button("Add To Cart", () => {
    cartManager.addItem(treatment);
  });

  li.innerHTML = `
    <h4>${treatment.name}</h4>
    <p>
      <strong>${treatment.price.toFixed(2)} zł</strong>
    </p>
    <footer></footer>
    `;

  li.querySelector("footer").append(readMoreButton, addToCartButton);

  return li;
}
