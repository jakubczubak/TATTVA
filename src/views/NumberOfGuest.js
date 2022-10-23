export function NumberOfGuest() {
  const dateDataPickerContainer = document.createElement("div");

  dateDataPickerContainer.className = "date-data-picker-container";

  dateDataPickerContainer.innerHTML = `
  <div class="date-data-picker" tabindex='0'>
    <div class="date-data-picker-header">
    <p>Guests</p>
  </div>
  <div class="date-picker">
  <img class="date-picker-image" src=${require("../assets/User_duotone_line.svg")} alt='Guest icon'>
    <p>Guests</p>  
    <img class="date-picker-plus-icon" src=${require("../assets/Add_ring_light.svg")} alt="Plus icon">
    <p>1</p>
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

  document.body.style.overflow = "hidden";

  return dateDataPickerContainer;
}
