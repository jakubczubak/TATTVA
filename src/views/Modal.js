export function Modal(body) {
  return `
    <div class="modal" tabindex="0">
      <p class="modal-title ${body.type}">${body.title}</p>
      <p class="modal-description">
        ${body.description}
      </p>
      <div class="modal-buttons">
        <button class="modal-accept">${body.accept_btn}</button>
        <button class="modal-decline">${body.decline_btn}</button>
      </div>
      <button class="modal-close-icon">X</button>
    </div>
    `;
}
