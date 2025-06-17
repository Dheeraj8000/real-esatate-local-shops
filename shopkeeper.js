let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
if (!currentUser || currentUser.role !== "shopkeeper") {
  window.location.href = "index.html";
}

let products = JSON.parse(localStorage.getItem("products")) || [];
let editingIndex = -1;

function addProduct() {
  const name = document.getElementById("product-name").value.trim();
  const mrp = document.getElementById("product-mrp").value.trim();
  const discounted = document.getElementById("product-discounted").value.trim();
  const imageInput = document.getElementById("product-image");

  if (!name || !mrp || !discounted || !imageInput.files[0]) {
    return alert("Please fill all fields and select image.");
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const image = e.target.result;
    const product = {
      name,
      mrp,
      discounted,
      image,
      shopkeeper: currentUser.username,
      location: currentUser.shopLocation
    };

    if (editingIndex >= 0) {
      products[editingIndex] = product;
      editingIndex = -1;
    } else {
      products.push(product);
    }

    localStorage.setItem("products", JSON.stringify(products));
    showShopkeeperProducts();
    document.getElementById("product-name").value = "";
    document.getElementById("product-mrp").value = "";
    document.getElementById("product-discounted").value = "";
    document.getElementById("product-image").value = "";
  };
  reader.readAsDataURL(imageInput.files[0]);
}

function showShopkeeperProducts() {
  const container = document.getElementById("shop-products");
  container.innerHTML = "";

  const myProducts = products.filter(p => p.shopkeeper === currentUser.username);
  myProducts.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${p.image}" width="100"><br>
      <strong>${p.name}</strong><br>
      Market: ₹${p.mrp} | You: ₹${p.discounted}<br>
      <button onclick="editProduct(${i})">Edit</button>
    `;
    container.appendChild(div);
  });
}

function editProduct(index) {
  const product = products.filter(p => p.shopkeeper === currentUser.username)[index];
  editingIndex = products.findIndex(p => p.name === product.name && p.shopkeeper === product.shopkeeper);

  document.getElementById("product-name").value = product.name;
  document.getElementById("product-mrp").value = product.mrp;
  document.getElementById("product-discounted").value = product.discounted;
}

showShopkeeperProducts();

