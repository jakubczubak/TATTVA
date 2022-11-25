import { cartManager } from "../cart/cart-manager";

export function QuickSummary() {
  const summary = document.createElement("div");
  summary.classList.add("quick-summary");

  const ul = document.createElement("ul");

  const lis = cartManager.getAllItems().map((cartEntry) => {
    const li = document.createElement("li");

    li.innerHTML = ` 
    <div>
    <p>${cartEntry.quantity}x</p>
    <p>${cartEntry.item.name}</p>
    <p>${cartEntry.item.price.toFixed(2)} PLN</p>
    </div>
        
        `;

    return li;
  });

  ul.append(...lis);

  const total = document.createElement("p");
  total.classList.add('quick-summary-total')
  total.innerHTML = `Total: ${cartManager.getTotal()} PLN`;

  summary.innerHTML = `
    <h3>Cart summary</h3>
    <div class='items-container'>

    </div>
    `;

  summary.querySelector(".items-container").append(ul);
  summary.append(total);

  return summary;
}
