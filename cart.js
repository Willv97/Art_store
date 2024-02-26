// Load cart data from localStorage, if available
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display cart content in the header
function displayCart() {
    const cartContent = document.querySelector(".cart-content");

    // Clear previous content
    cartContent.innerHTML = "";

    // If the cart is empty, display a message
    if (cart.length === 0) {
        cartContent.textContent = "Your cart is empty.";
        return;
    }

    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.textContent = `${item.product} - ${item.price}`;

        cartContent.appendChild(cartItem);
    });
}

// Function to handle the "Buy" button click
function handleBuyClick(event) {
    const button = event.target;

    if (button.classList.contains("buy-button")) {
        const product = button.getAttribute("data-product");
        const price = button.getAttribute("data-price");

        // Add the product to the cart
        cart.push({ product, price });

        // Save the cart data to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update the cart content
        displayCart();
    }
}

// Attach a click event handler for the "Buy" buttons
const gallery = document.querySelector(".art-gallery");
gallery.addEventListener("click", handleBuyClick);

// Display the cart when the page loads
displayCart();

