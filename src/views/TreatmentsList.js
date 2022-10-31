import { TreatmentListItem } from "./TreatmentsListItem";

export function TreatmentList() {
  const section = document.createElement("section");
  section.classList.add("treatment-list");

  section.innerHTML = `
<header>Loading...</header>
`;

  fetch("http://localhost:3000/treatments")
    .then((respone) => respone.json())
    .then((treatments) => {
      const ul = document.createElement("ul");

      const lis = treatments.map((treatment) => TreatmentListItem(treatment));

      ul.append(...lis);

      section.querySelector("header").remove();
      section.append(ul);
    });

  return section;
}
