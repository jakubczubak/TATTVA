import { TreatmentListItem } from "./TreatmentsListItem";

export function TreatmentList() {
  const section = document.createElement("section");

  section.innerHTML = `
<h2>Treatments List</h2>
<header>Loading</header>
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
