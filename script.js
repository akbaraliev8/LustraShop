// Product Catalog
const products = [
  { id: 1, name: 'Product 1', price: 10.00 },
  { id: 2, name: 'Product 2', price: 15.00 },
  // Add more products as needed
];

// Shopping Cart
let cart = [];

// Add to Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    console.log(`${product.name} added to cart.`);
  }
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(p => p.id !== productId);
  console.log(`Product with id ${productId} removed from cart.`);
}

// View Cart
function viewCart() {
  console.log('Cart:', cart);
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    console.log('Your cart is empty.');
    return;
  }
  // Process payment and clear cart
  console.log('Checkout complete. Thank you for your purchase!');
  cart = [];
}

// User Authentication
let users = [];

function signUp(username, password) {
  users.push({ username, password });
  console.log(`${username} signed up successfully.`);
}

function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    console.log(`${username} logged in.`);
  } else {
    console.log('Invalid username or password.');
  }
}