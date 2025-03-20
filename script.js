let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} added to cart!`);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalPrice = document.getElementById("cart-total");
    
    if (!cartList || !totalPrice) return;
    
    cartList.innerHTML = "";
    let total = 0;
    
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });
    
    totalPrice.textContent = total;
}

function checkout() {
    alert("Checkout is not implemented yet.");
}
