// Home.js
import { DateComponent } from "./DateComponent";
import { setCheckOutDate } from "./DateComponent";

export function Home() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add('home-container');

  const slideContainer = document.createElement('div');
  slideContainer.classList.add('slide-container');
  slideContainer.append(DateComponent());








  homeContainer.append(slideContainer);

  return homeContainer;
}
