var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.ceil(Math.random() * 100+1)
 
 cart.push({
   
   'itemName': itemName,
   'itemPrice': itemPrice
 })
 
 return`${itemName} has been added to your cart.`
 
}


// Math.floor() function returns the largest integer less than or equal to a given number down to the nearest, lesser, whole number.
// Math.Random() function returns a random integer between 0-1
// add +1 so it can never be 0


function viewCart() {
 if (cart.length === 0) {
   return "Your shopping cart is empty."
 } 
 var cartStringsArray = []
 for(var i=0; i < cart.length; i++){
  var currentValue = cart[i]
   cartStringsArray.push(`${currentValue.itemName} at $${currentValue.itemPrice}`)
 }
  var myString = "In your cart, you have "
  if(cart.length === 1) {
   //myString += cartStringsArray[0] + "."
    myString += `${cartStringsArray}.`
  }
  else if (cart.length === 2) {
    //myString += (cartStringsArray[0] + ", and " + cartStringsArray[1] + ".")
    myString += `${cartStringsArray[0]}, and ${cartStringsArray[1]}.`
  }
  else{
    var lastItem = cartStringsArray.pop()
    var middleItems = cartStringsArray.join(", ")
    //myString += middleItems + ", and " + lastItem + "."
    myString += `${middleItems}, and ${lastItem}.`
   
    }
     return myString
 

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
