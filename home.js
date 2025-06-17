let products = JSON.parse(localStorage.getItem("products")) || [];

function searchProduct() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  let filtered = products.filter(p => p.name.toLowerCase().includes(keyword));

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${p.image}" width="100"><br>
      <strong>${p.name}</strong><br>
      MRP: ₹${p.mrp} | Offer: ₹${p.discounted}<br>
      Shop: ${p.location}
    `;
    list.appendChild(div);
  });
}
