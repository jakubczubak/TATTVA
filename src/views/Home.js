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
      <div>
        <div>
          <img src="" alt="" />
          <p>Bespoke Experiences</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Certified Therapists</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Commitment to Hygiene</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Ensuite Steam/Shower*</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Quaity Products</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Researched Therapies</p>
        </div>
      </div>
  `;

  homeContainer.append(slideContainer, content);

  return homeContainer;
}
