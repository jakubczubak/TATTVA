// RoomDetails.js
export function RoomDetails(id) {
  const roomDetailsContainer = document.createElement("div");
  roomDetailsContainer.classList.add('room-details-container');

  roomDetailsContainer.innerHTML = `
    <header>Loading...</header>
  `;

  fetch(`http://localhost:3000/rooms/${id}`)
    .then((response) => response.json())
    .then((room) => {
      const roomDetails = document.createElement("div");
      roomDetails.classList.add('room-details')

      roomDetails.innerHTML = `
        <strong>Nazwa:</strong> ${room.name}
        <br/>
        <strong>Beds:</strong> ${room.beds}x🛏️
        <br/>
        <strong>Guests:</strong> ${room.guests}x👤
        <br/>
        <strong>Description:</strong> ${room.description}
        <br/>
        <strong>Price:</strong> ${room.price.toFixed(2)} zł
      `;

      roomDetailsContainer.querySelector("header").remove();
      roomDetailsContainer.append(roomDetails);
    });


    document.body.style.overflow = "hidden";

  return roomDetailsContainer;
}
