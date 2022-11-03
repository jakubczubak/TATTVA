import { Button } from "../common/Button";
import { cartManager } from "../cart/cart-manager";

export function TreatmentDetails(id) {
  const section = document.createElement("section");
  section.classList.add('treatment-details-container');

  section.innerHTML = `
      <header>Loading...</header>
    `;

  fetch(`http://localhost:3000/treatments/${id}`)
    .then((response) => response.json())
    .then((treatment) => {
      const treatmentDetails = document.createElement("div");
      treatmentDetails.classList.add('treatment-details');
      treatmentDetails.setAttribute("tabindex", 0);

      const addToCartButton = Button("ADD TO CART", () => {
        cartManager.addItem(treatment);
      });

      treatmentDetails.innerHTML = `
      <div class='treatment-details-image'>
      <img src=${require("../assets/Afrodyta_spa.jpg")} alt='Treatment photo'/>
      </div>
      <div class='treatment-details-info'>
      <h4>${treatment.name}</h4>
          <br/>
          <strong>Body part:</strong> ${treatment.area}
          <br/>
          <strong>Duration:</strong> ${treatment.time} min
          <br/>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <strong class='treatment-details-info-price'>${treatment.price.toFixed(2)} PLN</strong>
          <div class='treatment-details-info-add-to-cart'>
          </div> 
      </div>
        `;

        treatmentDetails.querySelector('.treatment-details-info-add-to-cart').append(addToCartButton);

      section.querySelector("header").remove();
      section.append(treatmentDetails);


      treatmentDetails.focus();
      treatmentDetails.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          const treatmentDetailsContainer = document.querySelector(
            ".treatment-details-container"
          );
          treatmentDetailsContainer.remove();
          document.body.style.overflow = "auto";
        }
      });

      section.addEventListener("click", (e) => {
        if (e.target.classList.contains("treatment-details-container")) {
          e.target.remove();
          document.body.style.overflow = "auto";
        }
      });
    });

    document.body.style.overflow = "hidden";

  return section;
}
