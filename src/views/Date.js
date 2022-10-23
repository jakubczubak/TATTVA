import { RoomsList } from "../views/RoomsList";
import { NumberOfNights } from "./NumberOfNights";
import { NumberOfGuest } from "./NumberOfGuest";

export function Date() {
  const dateContainer = document.createElement("div");
  dateContainer.className = "date-container";

  dateContainer.innerHTML = `
    <div class="date-check-in">
        <header>Check in</header>
        <img src=${require("../assets/Date_range_duotone_line.svg")} alt="Calendar" />
        <input class="date-check-in-input" type="date" />
      </div>
      <div class="date-nights">
        <img class="date-nights-moon-img" src=${require("../assets/Moon_alt_light.svg")} alt="Moon" />

        <p>1 Night</p>
        <img
          class="date-nights-img"
          src=${require("../assets/Expand_down_light.svg")}
          alt="Down arrow"
        />
      </div>
      <div class="date-check-out">
        <header>Check out</header>
        <img src=${require("../assets/Date_range_duotone_line.svg")} alt="Calendar" />
        <p>Tue, 28 Jul 2021</p>
      </div>
      <div class="date-guest">
        <header>Guest</header>
        <img src=${require("../assets/User_duotone_line.svg")} alt="Calendar" />
        <p>1 Guest</p>
        <img
          class="date-guest-img"
          src=${require("../assets/Expand_down_light.svg")}
          alt="Down arrow"
        />
      </div>
      <div class="date-search-btn-container">
        <button class="date-search-btn">Search</button>
      </div>
    `;

  const searchBtn = dateContainer.querySelector(".date-search-btn");

  searchBtn.addEventListener("click", () => {
    //zebrać wszyzstkie dane i je wypisac w konsoli

    const navigateEvent = new CustomEvent("navigate", {
      detail: () => RoomsList(),
    });

    document.body.dispatchEvent(navigateEvent);
  });

  const dateNightsBtn = dateContainer.querySelector(".date-nights-img");

  dateNightsBtn.addEventListener("click", () => {
    const dataPicker = document.querySelector(".date-data-picker-container");

    if (!dataPicker) {
      dateContainer.querySelector(".date-nights").append(NumberOfNights());

      document.querySelector(".date-data-picker").focus();
    }
  });

  const dateGuestBtn = dateContainer.querySelector(".date-guest-img");

  dateGuestBtn.addEventListener("click", () => {
    const dataPicker = document.querySelector(".date-data-picker-container");

    if (!dataPicker) {
      dateContainer.querySelector(".date-guest").append(NumberOfGuest());
      document.querySelector(".date-data-picker").focus();
    }
  });

  return dateContainer;
}
