function cartShopping() {
    let cart = document.querySelector('.cart-shopping');
    if (cart.style.display === 'block') {
        cart.style.display = 'none';
    } else {
        cart.style.display = 'block';
    }
}
const cartProduct = []
const products = (name,price)=>{
cartProduct.push({name,price})
cartProductDetails()
totalValue()
updateQuantityOfCart()
}
const cartProductDetails = () => {
    document.getElementById("cart_items").innerHTML = ""
    cartProduct.map((item)=>(
     document.getElementById("cart_items").innerHTML += 
     `
     <div class="d-flex cart-item">
     <div>${item.name}</div>
     <div>${"$" + item.price}</div>
     </div>
     `
    )
    )
}
const totalValue = ()=>{
    let total = 0
    cartProduct.map((item)=>(
      total += item.price
    ))
    document.getElementById("Total").innerHTML = "$" + total
}
const updateQuantityOfCart = () =>{
    document.getElementById("cart-quantity").innerHTML = cartProduct.length
}
const submitOrder = () => {
    alert("Order Confirmed Successfully:)")
}