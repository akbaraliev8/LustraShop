// script.js

// Login/Registration Form Animation
$(document).ready(function() {
    $('#login-link').click(function() {
        $('#login-form').fadeIn();
        $('#registration-form').fadeOut();
    });
    $('#register-link').click(function() {
        $('#registration-form').fadeIn();
        $('#login-form').fadeOut();
    });
});

// Product Filtering
function filterProducts() {
    let filter = $('#product-filter').val().toLowerCase();
    $('.product-item').each(function() {
        let productName = $(this).find('.product-name').text().toLowerCase();
        $(this).toggle(productName.includes(filter));
    });
}

$('#product-filter').on('input', filterProducts);

// Shopping Cart Management
let cart = [];
function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

function updateCartDisplay() {
    $('#cart-count').text(cart.length);
}

// Interactive Effects
$('.product-item').hover(function() {
    $(this).addClass('hovered');
}, function() {
    $(this).removeClass('hovered');
});