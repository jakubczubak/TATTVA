import { setCheckOutDate } from "./DateComponent";

export function NumberOfNights(nightsNumber) {
  const dateDataPickerContainer = document.createElement("div");

  dateDataPickerContainer.className = "date-data-picker-container";

  dateDataPickerContainer.innerHTML = `
  <div id='date-data-picker' class="date-data-picker" tabindex='0'>
  <div class="date-data-picker-header">
  <p>Nights</p>
</div>
<div class="date-picker">
  <img class="date-picker-image" src=${require("../assets/Moon_alt_light.svg")} alt='Night icon'>
  <p>Nights</p>  
  <img class="date-picker-plus-icon" src=${require("../assets/Add_ring_light.svg")} alt="Plus icon">
  <p class='date-picker-days'>${nightsNumber}</p>
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

  const nightPlusIcon = dateDataPickerContainer.querySelector(
    ".date-picker-plus-icon"
  );

  nightPlusIcon.addEventListener("click", () => {
    const numberOfNightElement =
      dateDataPickerContainer.querySelector(".date-picker-days");
    const numbersOfNights = document.querySelector(".date-nights-number");

    if (parseInt(numberOfNightElement.innerText) == 14) {
      //Do nothing
    } else {
      let numberOfNight = parseInt(numberOfNightElement.innerText) + 1;

      numberOfNightElement.innerText = numberOfNight;
      numbersOfNights.innerText = numberOfNight;

      const dateContainer = document.querySelector(".date-container");
      setCheckOutDate(dateContainer);
    }
  });

  const nightMinusIcon = dateDataPickerContainer.querySelector(
    ".date-picker-minus-icon"
  );

  nightMinusIcon.addEventListener("click", () => {
    const numberOfNightElement =
      dateDataPickerContainer.querySelector(".date-picker-days");
    const numbersOfNights = document.querySelector(".date-nights-number");

    if (parseInt(numberOfNightElement.innerText) == 1) {
      //Do nothing
    } else {
      let numberOfNight = parseInt(numberOfNightElement.innerText) - 1;

      numberOfNightElement.innerText = numberOfNight;
      numbersOfNights.innerText = numberOfNight;

      const dateContainer = document.querySelector(".date-container");
      setCheckOutDate(dateContainer);
    }
  });

  document.body.style.overflow = "hidden";

  return dateDataPickerContainer;
}
