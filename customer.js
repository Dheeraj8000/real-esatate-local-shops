let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
if (!currentUser || currentUser.role !== "customer") {
  window.location.href = "index.html";
}

let products = JSON.parse(localStorage.getItem("products")) || [];
let favorites = JSON.parse(localStorage.getItem(currentUser.username + "_favorites")) || [];

function filterProducts() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const list = document.getElementById("customer-products");
  list.innerHTML = "";

  let filtered = products
    .filter(p => p.name.toLowerCase().includes(keyword)) // 🔍 Only search filter
    .sort((a, b) => parseFloat(a.discounted) - parseFloat(b.discounted));

  if (filtered.length === 0) {
    list.innerHTML = "<p>No matching products found.</p>";
    return;
  }

  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" width="100"><br>
      <strong>${p.name}</strong><br>
      MRP: ₹${p.mrp} | Deal: ₹${p.discounted}<br>
      Shop: ${p.location}<br>
      <button onclick="addToFavorites(${i})">❤️ Favorite</button>
    `;
    list.appendChild(card);
  });
}

function addToFavorites(index) {
  const product = products[index];
  if (!favorites.find(f => f.name === product.name)) {
    favorites.push(product);
    localStorage.setItem(currentUser.username + "_favorites", JSON.stringify(favorites));
    alert("Added to favorites!");
  } else {
    alert("Already in favorites");
  }
}

filterProducts();
