export function NumberOfGuest(guestsNumber) {
  const dateDataPickerContainer = document.createElement("div");

  dateDataPickerContainer.className = "date-data-picker-container";

  dateDataPickerContainer.innerHTML = `
  <div id='date-data-picker' class="date-data-picker" tabindex='0'>
    <div class="date-data-picker-header">
    <p>Guests</p>
  </div>
  <div class="date-picker">
  <img class="date-picker-image" src=${require("../assets/User_duotone_line.svg")} alt='Guest icon'>
    <p>Guests</p>  
    <img class="date-picker-plus-icon" src=${require("../assets/Add_ring_light.svg")} alt="Plus icon">
    <p class='date-picker-days'>${guestsNumber}</p>
    <img class="date-picker-minus-icon" src=${require("../assets/subtraction_ring_light.svg")} alt="Minus icon">
  </div>
  </div>
    `;

  dateDataPickerContainer.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const dataPicker = document.querySelector(".date-data-picker-container");
      dataPicker.remove();
      document.body.style.overflow = "auto";
    }
  });

  document.addEventListener("mouseup", function (e) {
    try {
      const container = document.getElementById("date-data-picker");
      if (!container.contains(e.target)) {
        container.parentElement.remove();
      }
    } catch (error) {
      //Do nothing
    }
  });

  const guestPlusIcon = dateDataPickerContainer.querySelector(
    ".date-picker-plus-icon"
  );

  guestPlusIcon.addEventListener("click", () => {
    const numberOfGuestElement =
      dateDataPickerContainer.querySelector(".date-picker-days");
    const numberOfGuests = document.querySelector(".date-guest-number");

    if (parseInt(numberOfGuestElement.innerText) == 4) {
      //Do nothing
    } else {
      let numberOfGuest = parseInt(numberOfGuestElement.innerText) + 1;

      numberOfGuestElement.innerText = numberOfGuest;
      numberOfGuests.innerText = numberOfGuest;
    }
  });

  const guestMinusIcon = dateDataPickerContainer.querySelector(
    ".date-picker-minus-icon"
  );

  guestMinusIcon.addEventListener("click", () => {
    const numberOfGuestElement =
      dateDataPickerContainer.querySelector(".date-picker-days");
    const numberOfGuests = document.querySelector(".date-guest-number");

    if (parseInt(numberOfGuestElement.innerText) == 1) {
      //Do nothing
    } else {
      let numberOfGuest = parseInt(numberOfGuestElement.innerText) - 1;

      numberOfGuestElement.innerText = numberOfGuest;
      numberOfGuests.innerText = numberOfGuest;
    }
  });

  document.body.style.overflow = "hidden";

  return dateDataPickerContainer;
}
