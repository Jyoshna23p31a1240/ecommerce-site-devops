let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cartContainer");
const cartTotal = document.getElementById("cartTotal");

function renderCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty 🪴</p>";
    cartTotal.textContent = "0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * (item.quantity || 1);

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    itemDiv.innerHTML = `
      <div>
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
      </div>
      <div>
        <input type="number" min="1" value="${item.quantity || 1}" onchange="updateQuantity(${index}, this.value)">
        <button onclick="removeItem(${index})">🗑 Remove</button>
      </div>
    `;

    cartContainer.appendChild(itemDiv);
  });

  cartTotal.textContent = total.toFixed(2);
}

function updateQuantity(index, newQty) {
  cart[index].quantity = parseInt(newQty);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
