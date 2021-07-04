

// read from localstorage -> current product

function getProductFromLocalStorage() {
    var productString = localStorage.getItem("product");
    var product = JSON.parse(productString);

    return product

}

function updateCart( key,productsArray) {
   localStorage.setItem(key, JSON.stringify(productsArray)) 
}

function readCart() {
    var cartItems = localStorage.getItem("cart");
    return JSON.parse(cartItems)

}


// add to localstorae

function addToCart() {
   

    var cartItems = readCart();
    
    var product = getProductFromLocalStorage();
   
    cartItems.push(product);

    updateCart("cart", cartItems);

    console.log(readCart());

    //if present cart get it

    if(localStorage.getItem("cart")){
        console.log(true);
    }
    else{
        console.log(false)
    }

}

// read the cart from localstorage

