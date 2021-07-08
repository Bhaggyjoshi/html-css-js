
//read items from cart 
function readCart() {
    var cartItems = localStorage.getItem("cart");
    return JSON.parse(cartItems)

}

// read from localstorage -> current product
function getProductFromLocalStorage() {
    var productString = localStorage.getItem("product");
    return  JSON.parse(productString);
}

//update cart 
function updateCart( key,productsArray) {
   localStorage.setItem(key, JSON.stringify(productsArray)) 
}



// add to localstorae

function addToCart() {
   
    if(!localStorage.getItem("cart"))
        localStorage.setItem("cart", JSON.stringify([]))


    var cartItems = readCart();
    
    var product = getProductFromLocalStorage();
   
    cartItems.push(product);

    updateCart("cart", cartItems);

    console.log(readCart());

    //if present cart get it
    console.log("Added Successfully")
    
}


function renderCart() {
    
    //read card 
    var cartItems = readCart();
    let txt = "";
    for (let x in cartItems) {
    txt += `<li>
                <img src ="${cartItems[x].imgpath}" > 
                <p>${cartItems[x].name} </p>
                <p>${cartItems[x].price} </p>
                
            </li> `;
    };
    document.getElementById("product-1").innerHTML = txt;
     //var itemList = document.getElementById("itemList");

     
}


//     for (let index = 0; index < cartItems.length; index++) {
        
//         // const item   = `
//         //     <li>
//         //         <img src="${cartItems[index].imgpath}"/>
//         //         <p>${cartItems[index].name}</p>
//         //         <p>${cartItems[index].price}</p>
//         //     </li>
//         // `
//         // itemList.innerHTML = item;
//         // console.log(item)
//         const item =itemList.map((itemList) => `
//         <a href="../html/cart.html">
//         <li class="card"  onclick="getInfo(${itemList.id})">
//             <img class="card-image" src="${itemList.image}"/>
//             <h2 class="card-title">${itemList.id}. ${itemList.name}</h2>
//             <p class="card-subtitle">price: ${itemList.price}</p>
//         </li></a>`).join('');
//         itemList.innerHTML = item;
//     }

// }
// // const item =itemList.map((itemList) => `
// //         <a href="../html/cart.html">
// //         <li class="card"  onclick="getInfo(${itemList.id})">
// //             <img class="card-image" src="${itemList.image}"/>
// //             <h2 class="card-title">${itemList.id}. ${itemList.name}</h2>
// //             <p class="card-subtitle">price: ${itemList.price}</p>
// //         </li></a>
// //     `).join('');
// //     itemList.innerHTML = item;
// function getInfo(id) {
//     console.log(id)
// }