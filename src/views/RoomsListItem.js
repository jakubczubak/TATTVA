// RoomsListItem.js
import { cartManager } from "../cart/cart-manager";
import { Button } from "../common/Button";
import { RoomDetails } from "./RoomDetails";

// wytwarza element <li> prezentujacy pojedynczy pokoj
export function RoomsListItem(room) {
  const li = document.createElement("li");
  li.classList.add('list-item');

  const readMoreButton = Button("Read More", () => {
    const navigateEvent = new CustomEvent("navigate", {
      detail: () => RoomDetails(room.id),
    });

    document.body.dispatchEvent(navigateEvent);
  });

  const addToCartButton = Button("Book now", () => {
    cartManager.addItem(room);
  });

  li.innerHTML = `
    <div class='image-container'>
    <img src=${require("../assets/room.jpg")} alt='Room photo'/>
    </div>
    <div class='room-info-container'>
    <h4>${room.name}</h4>
    <ul>
       <li>45-50 m2</li>
       <li>2 rooms, 1 bathroom, kitchenette</li>
       <li>1 double, 1 folded</li>
       <li>Balcony, Wi-Fi, air conditioning, TV</li>
       <li>1 sofa bed</li>
       <li>PS5 & Xbox ONE</li>
    </ul>
    <p class='room-price'>
      <strong>${room.price.toFixed(2)} PLN</strong>
    </p>
    <div class='read-more-btn'></div>
    <div class='book-now-btn'></div>
    </div>
  `;

  // ROWNOZNACZNE Z: li.lastElementChild.append(readMeButton);
  li.querySelector(".read-more-btn").append(readMoreButton);
  li.querySelector(".book-now-btn").append(addToCartButton);

  return li;
}
