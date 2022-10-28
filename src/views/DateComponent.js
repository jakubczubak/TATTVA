import { RoomsList } from "./RoomsList";
import { NumberOfNights } from "./NumberOfNights";
import { NumberOfGuest } from "./NumberOfGuest";

export function DateComponent() {
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
        <p class='date-nights-number'>1</p>
        <p>Night</p>
        <img
          class="date-nights-img"
          src=${require("../assets/Expand_down_light.svg")}
          alt="Down arrow"
        />
      </div>
      <div class="date-check-out">
        <header>Check out</header>
        <img src=${require("../assets/Date_range_duotone_line.svg")} alt="Calendar" />
        <input type='date' readOnly></input>
      </div>
      <div class="date-guest">
        <header>Guest</header>
        <img src=${require("../assets/User_duotone_line.svg")} alt="Calendar" />
        <p class='date-guest-number'>1 </p>
        <p>Guest</p>
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

    const checkIn = dateContainer.querySelector(".date-check-in-input").value;
    const checkOut = dateContainer.querySelector(".date-check-out input").value;
    const guests = dateContainer.querySelector(".date-guest-number").innerText;

    const reservation = {
      checkIn: checkIn,
      checkOut: checkOut,
      guests: guests,
    };

    console.log("BOOKING INFO:");
    console.log(reservation);

    const navigateEvent = new CustomEvent("navigate", {
      detail: () => RoomsList(guests),
    });

    document.body.dispatchEvent(navigateEvent);
  });

  const dateNightsBtn = dateContainer.querySelector(".date-nights-img");

  dateNightsBtn.addEventListener("click", () => {
    const dataPicker = document.querySelector(".date-data-picker-container");

    if (!dataPicker) {
      const nightsNumber = parseInt(
        document.querySelector(".date-nights-number").innerText
      );
      dateContainer
        .querySelector(".date-nights")
        .append(NumberOfNights(nightsNumber));

      document.querySelector(".date-data-picker").focus();

      document.body.style.overflow = "auto";
    }
    
  });

  const dateGuestBtn = dateContainer.querySelector(".date-guest-img");

  dateGuestBtn.addEventListener("click", () => {
    const dataPicker = document.querySelector(".date-data-picker-container");

    if (!dataPicker) {
      const guestsNumber = parseInt(
        document.querySelector(".date-guest-number").innerText
      );
      dateContainer
        .querySelector(".date-guest")
        .append(NumberOfGuest(guestsNumber));
      document.querySelector(".date-data-picker").focus();
      document.body.style.overflow = "auto";
    }
  });

  function setMinCheckInDate() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}-${month}-${day}`;
    const checkInDate = dateContainer.querySelector(".date-check-in-input");

    checkInDate.setAttribute("min", currentDate);
    checkInDate.value = currentDate;
  }

  setMinCheckInDate();

  function setMaxCheckInDate() {
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    const date = new Date().addDays(365);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}-${month}-${day}`;

    const checkInDate = dateContainer.querySelector(".date-check-in-input");

    checkInDate.setAttribute("max", currentDate);
  }

  const checkInElement = dateContainer.querySelector(".date-check-in-input");

  checkInElement.addEventListener("change", () => {
    setCheckOutDate(dateContainer);
  });

  setMaxCheckInDate();

  setCheckOutDate(dateContainer);

  return dateContainer;
}

export function setCheckOutDate(dateContainer) {
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  const checkInDate = dateContainer.querySelector(".date-check-in-input");
  const numbersOfNights = dateContainer.querySelector(".date-nights-number");

  const date = new Date(checkInDate.value);
  const updatedDate = date.addDays(parseInt(numbersOfNights.innerText));

  let day =
    updatedDate.getDate() < 10
      ? "0" + updatedDate.getDate()
      : updatedDate.getDate();
  let month = updatedDate.getMonth() + 1;
  let year = updatedDate.getFullYear();

  let currentDate = `${year}-${month}-${day}`;

  const checkOutDate = dateContainer.querySelector(".date-check-out input");

  checkOutDate.value = currentDate;
}
