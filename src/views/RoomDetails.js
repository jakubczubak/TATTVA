// RoomDetails.js

import { Button } from "../common/Button";
import { cartManager } from "../cart/cart-manager";

export function RoomDetails(id) {
  const roomDetailsContainer = document.createElement("div");
  roomDetailsContainer.classList.add("room-details-container");

  roomDetailsContainer.innerHTML = `
    <header>Loading...</header>
  `;

  fetch(`http://localhost:3000/rooms/${id}`)
    .then((response) => response.json())
    .then((room) => {
      const roomDetails = document.createElement("div");
      roomDetails.classList.add("room-details");
      roomDetails.setAttribute("tabindex", 0);

      const addToCartButton = Button("Book now", () => {
        cartManager.addItem(room);
      });

      roomDetails.innerHTML = `

        <div class='room-details-image'>
        <img src=${require("../assets/room.jpg")} alt='Room photo'/>
        </div>
        <div class='room-details-amenities'>
        <ul>
        <li>45-50 m2</li>
        <li>2 rooms, 1 bathroom, kitchenette</li>
        <li>1 double, 1 folded</li>
        <li>Balcony, Wi-Fi, air conditioning, TV</li>
        <li>1 sofa bed</li>
        <li>PS5 & Xbox ONE</li>
     </ul>
        </div>
        <div class='room-details-info'>
        <strong class='room-details-info-room-name'>${room.name}</strong>
        <br/>
        <strong>Beds: ${room.beds}x</strong> 
        <br/>
        <strong>Guests:  ${room.guests}x</strong>
        <br/>
        <strong>Description:</strong> ${room.description}
        <br/>
        </div>
        <div class='room-details-btn'>
        <strong> ${room.price.toFixed(2)} PLN</strong>
        </div>
        
      `;

      roomDetails.querySelector(".room-details-btn").append(addToCartButton);

      roomDetailsContainer.querySelector("header").remove();
      roomDetailsContainer.append(roomDetails);

      roomDetails.focus();
      roomDetails.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          const roomDetailsContainer = document.querySelector(
            ".room-details-container"
          );
          roomDetailsContainer.remove();
          document.body.style.overflow = "auto";
        }
      });

      roomDetailsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("room-details-container")) {
          e.target.remove();
          document.body.style.overflow = "auto";
        }
      });
    });

  document.body.style.overflow = "hidden";

  return roomDetailsContainer;
}
