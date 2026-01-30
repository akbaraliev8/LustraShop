// script.js

// Product Catalog
const products = [
    { id: 1, name: 'Product 1', price: 10.00, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 20.00, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 30.00, image: 'product3.jpg' }
];

function displayProducts() {
    const catalog = document.getElementById('product-catalog');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h2>${product.name}</h2><p>Price: $${product.price}</p><button onclick="addToCart(${product.id})">Add to Cart</button>`;
        catalog.appendChild(productDiv);
    });
}

// Shopping Cart Management
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartDisplay();
        notifyUser(`${product.name} has been added to your cart!`);
    }
}

function updateCartDisplay() {
    const cartDisplay = document.getElementById('cart');
    cartDisplay.innerHTML = cart.map(p => `<p>${p.name}: $${p.price}</p>`).join('');
}

// Checkout Functionality
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    // Continue with checkout process... (Placeholder)
    alert('Proceeding to checkout...');
}

// User Authentication
let users = []; // Temporary user storage

function register(username, password) {
    const user = { username, password };
    users.push(user);
    alert(`User ${username} registered successfully!`);
}

function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert(`Welcome back, ${username}!`);
        // Set user session (Placeholder)
    } else {
        alert('Invalid credentials.');
    }
}

// Local Storage Integration
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartDisplay();
    }
}

// Notification System
function notifyUser(message) {
    const notification = document.createElement('div');
    notification.innerText = message;
    notification.className = 'notification';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Section Navigation
function navigateTo(section) {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Load cart on page load
window.onload = () => {
    loadCart();
    displayProducts();
};