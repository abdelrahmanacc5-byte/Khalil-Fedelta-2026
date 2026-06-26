let cart = [];
let cartCount = 0;
let total = 0;

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

cartBtn.onclick = function () {
    cartSidebar.classList.add("active");
}

closeCart.onclick = function () {
    cartSidebar.classList.remove("active");
}

function addToCart(name, price, stockId){

let stock=document.getElementById(stockId);

let quantity=parseInt(stock.innerText);

if(quantity<=0){

alert("Prodotto esaurito!");

return;

}

quantity--;

stock.innerText=quantity;

cart.push({
name:name,
price:price
});

cartCount++;

document.getElementById("cartCount").innerText=cartCount;

updateCart();

}

function updateCart(){

cartItems.innerHTML="";

total=0;

cart.forEach((item,index)=>{

total+=item.price;

cartItems.innerHTML+=`

<div class="cart-item">

<div>

<h4>${item.name}</h4>

<p>€${item.price}</p>

</div>

<button onclick="removeItem(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</div>

`;

});

if(cart.length==0){

cartItems.innerHTML="<p>Il carrello è vuoto.</p>";

}

totalPrice.innerText=total.toFixed(2);

}

function removeItem(index){

cart.splice(index,1);

cartCount--;

if(cartCount<0) cartCount=0;

document.getElementById("cartCount").innerText=cartCount;

updateCart();

}
