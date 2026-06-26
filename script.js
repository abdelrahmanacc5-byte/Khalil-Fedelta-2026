let cart = [];
let cartCount = 0;

function addToCart(name, price, stockId) {

let stock = document.getElementById(stockId);

let quantity = parseInt(stock.innerText);

if(quantity <= 0){

alert("Prodotto esaurito!");
return;

}

quantity--;

stock.innerText = quantity;

cart.push({
name:name,
price:price
});

cartCount++;

document.getElementById("cartCount").innerText = cartCount;

alert(name + " aggiunto al carrello!");
}
