// Home.js
import { DateComponent } from "./DateComponent";
import { setCheckOutDate } from "./DateComponent";

export function Home() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  const slideContainer = document.createElement("div");
  slideContainer.classList.add("slide-container");
  slideContainer.append(DateComponent());

  const content = document.createElement("div");
  content.classList.add('content-container')
  content.innerHTML = `
  <h1>WELCOME</h1>
      <p>
        The daily grind of work and personal takes a toll on your body and mind.
        A regular Spa helps you unwind, relax and re-energise. Choose from
        across the signature, home-crafted massages & therapies or go for the
        good old Deep tissue massage, Swedish massage, Ayurvedic massages or the
        Thai massage.
      </p>
      <p>
        Tattva Spa therapies will help keep your body running smoothly, so you
        can run that half marathon or that full day of meetings.
      </p>
      <h3>Make time for Spa & Self-care.</h3>
      <div class='items-container'>
        <div class='item'>
          <img src="${require("../assets/bespoke-experiences-2.svg")}" alt="" />
          <p>Bespoke Experiences</p>
        </div>
        <div class='item'>
          <img src="${require("../assets/Certified-Therapist.svg")}" alt="" />
          <p>Certified Therapists</p>
        </div>
        <div class='item'>
          <img src="${require("../assets/Commitment-to-hygiene-2.svg")}" alt="" />
          <p>Commitment to Hygiene</p>
        </div>
        <div class='item'>
          <img src="${require("../assets/Ensuite-steam_shower-2.svg")}" alt="" />
          <p>Ensuite Steam/Shower*</p>
        </div>
        <div class='item'>
          <img src="${require("../assets/Quality-Products-2.svg")}" alt="" />
          <p>Quaity Products</p>
        </div>
        <div class='item'>
          <img src="${require("../assets/researched-therapies-2.svg")}" alt="" />
          <p>Researched Therapies</p>
        </div>
      </div>
  `;

  homeContainer.append(slideContainer, content);

  return homeContainer;
}
