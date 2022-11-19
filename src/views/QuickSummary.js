import { cartManager } from "../cart/cart-manager";

export function QuickSummary() {
  const summary = document.createElement("div");
  summary.classList.add("quick-summary");

  const ul = document.createElement("ul");

  const lis = cartManager.getAllItems().map((cartEntry) => {
    const li = document.createElement("li");

    li.innerHTML = ` 
    <div>
    <p>${cartEntry.item.name}</p>
    <p>${cartEntry.quantity}</p>
    <p>${cartEntry.item.price.toFixed(2)}</p>
    </div>
        
        `;

    return li;
  });

  ul.append(...lis);

  summary.innerHTML = `
    <h3>Twój koszyk</h3>
    <div class='items-container'>
    
    </div>
    <Button>Go to the cart</Button>
    `;

  const itemsContainer = summary.querySelector("items-container");
  itemsContainer.append(ul);

  return summary;
}
