function registerUser() {
  const username = document.getElementById("register-username").value.trim();
  const password = document.getElementById("register-password").value.trim();
  const role = document.getElementById("register-role").value;
  const userLocation = document.getElementById("user-location").value.trim();

  let user = { username, password, role, location: userLocation };

  if (role === "shopkeeper") {
    user.shopName = document.getElementById("shop-name").value.trim();
    user.shopLocation = document.getElementById("shop-location").value.trim();
    user.shopContact = document.getElementById("shop-contact").value.trim();
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(u => u.username === username)) {
    return alert("User already exists!");
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! Please login.");
  showLogin();
}

function loginUser() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return alert("Invalid credentials!");

  localStorage.setItem("currentUser", JSON.stringify(user));

  if (user.role === "shopkeeper") {
    window.location.href = "shopkeeper.html";
  } else {
    window.location.href = "customer.html";
  }
}
function showLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
}
function showRegister() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
}
