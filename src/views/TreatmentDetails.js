export function TreatmentDetails(id) {
  const section = document.createElement("section");

  section.innerHTML = `
      <header>Loading...</header>
    `;

  fetch(`http://localhost:3000/treatments/${id}`)
    .then((response) => response.json())
    .then((treatment) => {
      const paragraph = document.createElement("p");

      paragraph.innerHTML = `
          <strong>Nazwa:</strong> ${treatment.name}
          <br/>
          <strong>Część ciała:</strong> ${treatment.area}
          <br/>
          <strong>Czas trwania:</strong> ${treatment.time} min
          <br/>
          <strong>Price:</strong> ${treatment.price.toFixed(2)} zł
        `;

      section.querySelector("header").remove();
      section.append(paragraph);
    });

  return section;
}
