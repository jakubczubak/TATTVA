// Home.js
import { DateComponent } from "./DateComponent";
import { setCheckOutDate } from "./DateComponent";

export function Home() {
  const section = document.createElement("section");
  const image = document.createElement("img");

  image.src = require("../assets/support.png"); // Parcel znajdzie i podstawi dla nas ten obrazek
  image.style.border = "4px solid yellow";

  section.innerHTML = `
    <h2>IT SPA</h2>
    <p>Witaj w IT SPA. Każdy programista lubi u nas odpoczywać.</p>
  `;

  section.append(DateComponent(), image);

  return section;
}
