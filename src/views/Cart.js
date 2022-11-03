import { cartManager } from "../cart/cart-manager";
import { Button } from "../common/Button";

export function Cart() {
  const section = document.createElement("section");
  section.classList.add('shopping-cart-container')

  section.innerHTML = `
  <div class='shopping-cart-header'>
  <div class='active'>
  <strong>01</strong>
  <p>Shopping cart -</p>
  </div>
  <div>
  <strong>02</strong>
  <p>Personal data -</p>
  </div>
  <div>
  <strong>03</strong>
  <p>Payment -</p>
  </div>
  </div>
    
    `;
  const table = document.createElement("table");
  table.classList.add("table");

  const tableHead = document.createElement("tr");
  tableHead.innerHTML = `
    <th>Item</th>
    <th>Quantity</th>
    <th>Price</th>
    <th></th>
    `;

  const TableRows = cartManager.getAllItems().map((cartEntry) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${cartEntry.item.name}</td>
        <td>${cartEntry.quantity}</td>
        <td>${cartEntry.item.price.toFixed(2)} PLN</td>
        <td></td>
        `;

    const removeFromCart = Button("🗑️", () => {
      cartManager.removeItem(cartEntry.item);

      const navigateEvent = new CustomEvent("navigate", {
        detail: Cart,
      });

      document.body.dispatchEvent(navigateEvent);
    });

    // wstawiamy guzik do usuwania z koszyka do ostatniego lementu-dziecka w/w wierza (tr)
    tr.lastElementChild.append(removeFromCart);

    return tr;
  });

  const tableFooter = document.createElement("tr");
  tableFooter.classList.add('table-last-row')
  tableFooter.innerHTML = `
    <td></td>
    <td></td>
    <td class='shopping-cart-total'>
        <div>Total:</div>
        <div class='shopping-cart-total'> <strong>${cartManager.getTotal().toFixed(2)} PLN</strong></div>
        <div><button>NEXT</button></div> 
    </td>
    <td></td>

    `;

  table.append(tableHead, ...TableRows, tableFooter);
  section.append(table);

  return section;
}
