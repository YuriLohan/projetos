// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in navbar
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('#cart-count').forEach(el => {
        el.textContent = count;
    });
}

// Add item to cart
function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name,
            price,
            image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${name} added to cart`);
}

// Display cart items on cart page
function displayCartItems() {
    const cartItemsEl = document.getElementById('cart-items');
    const emptyCartEl = document.getElementById('empty-cart-message');
    const cartSummaryEl = document.getElementById('cart-summary');
    
    if (!cartItemsEl) return;

    if (cart.length === 0) {
        emptyCartEl.classList.remove('hidden');
        cartSummaryEl.classList.add('hidden');
        return;
    }

    emptyCartEl.classList.add('hidden');
    cartSummaryEl.classList.remove('hidden');

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="flex items-center py-4 border-b border-gray-200">
            <img src="${item.image}" alt="${item.name}" class="w-20 h-12 object-cover rounded">
            <div class="ml-4 flex-grow">
                <h4 class="font-medium">${item.name}</h4>
                <p class="text-gray-600">$${item.price.toLocaleString()}</p>
            </div>
            <div class="flex items-center">
                <button onclick="updateQuantity('${item.name}', -1)" class="px-3 py-1 bg-gray-200 rounded-l">
                    -
                </button>
                <span class="px-3 py-1 bg-gray-100">${item.quantity}</span>
                <button onclick="updateQuantity('${item.name}', 1)" class="px-3 py-1 bg-gray-200 rounded-r">
                    +
                </button>
                <button onclick="removeItem('${item.name}')" class="ml-4 text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');

    updateTotal();
}

// Update item quantity
function updateQuantity(name, change) {
    const item = cart.find(item => item.name === name);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.name !== name);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}

// Remove item from cart
function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
    showToast(`${name} removed from cart`);
}

// Calculate and update total
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('total-price').textContent = `$${total.toLocaleString()}`;
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg animate-fade-in';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('animate-fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    if (document.getElementById('cart-items')) {
        displayCartItems();
    }
});