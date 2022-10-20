
export function DateDataPicker(title) {

    const dateDataPickerContainer = document.createElement('div');

    dateDataPickerContainer.className = 'date-data-picker-container';
    dateDataPickerContainer.setAttribute('tabindex', '0')

    dateDataPickerContainer.innerHTML = `
    <div class="date-data-picker-header">
    <p>${title}</p>
  </div>
  <div class="date-picker">
    <p>${title}</p>  
    <img class="date-picker-plus-icon" src=${require("../assets/Add_ring_light.svg")} alt="Plus icon">
    <p>1</p>
    <img class="date-picker-minus-icon" src=${require("../assets/subtraction_ring_light.svg")} alt="Minus icon">
  </div>
    `

    dateDataPickerContainer.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const dataPicker = document.querySelector(".date-data-picker-container");
        dataPicker.remove();
        document.body.style.overflow = "auto";
      }
    });






    dateDataPickerContainer.addEventListener('click', (e) => {
      if (!dateDataPickerContainer.contains(e.target)) {
        console.log('elo');
      }
    })

    document.body.style.overflow = "hidden";

    return dateDataPickerContainer;
}