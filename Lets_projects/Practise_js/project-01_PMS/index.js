// console.log("Working!")
// we want data but data is in different form so for that we need objects and there are no of object for storing them we need arrays
// for fetching the data when the user click on button we need a function 
// for getiing the values from form inputs or user

let products=[
    {name:"Monitor",price:2220,quantity:12},
    {name:"Keyboard",price:320,quantity:156}
];
// 
// here addproduct() function is giving us a object wtih the values of properties
function addProduct() {
    // for that collection all the data we need object why because  the object is collection of similar properties and here 
// we are storing object proerties and a values which we aree taking from users.
// here we created one object which is "product" having properties name , price and quantity which we are getting from users
    let product = {

    };
    // we are getting a values from the input and stored in object property
    // here we are fetching the data from users using there ids and assigning it to the object properties
    product.name= document.getElementById('name').value;
    product.price = document.getElementById('price').value;
    product.quantity = document.getElementById('quantity').value;

    // we have to add object in array with its properties for that wee are using function push() 
    products.push(product);
    // console.log(products)
    display(); 
// it is working like a setter which sets a value of null
    document.getElementById('name').value = "";
    document.getElementById('price').value = "";
    document.getElementById('quantity').value = "";


}

// main moto of this function is that whenever we call function it simply create the object with assign the values to properties and pushing 
// it into the array



// the function display is used here to display all the elements from the array
// in the form of row of table i.e every time the loop will work until the all element are printed from the the array
// we are created one string which take all the elements of array
function display() {
    let productString="";
    
    for (let i = 0; i < products.length; i++) {
         
        // here we are trying to create a row of table every time for each object
        // for that we used innerHTML which is work like html it creates the same html format like tags , tables
        // here we are using productString and assign it to the tr with table cells
        // 
        productString +=
        `
            <tr>
                <td>${i+1}</td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].quantity}</td>
                <td> 
                        <button class="btn" onclick="setupData(${i})">Update</button>
                        <button class="btn" onclick="deleteProduct(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
    document.getElementById('table_data').innerHTML = productString
}
display();


// delete the element from array i.e products why we used this for deleting a product and after deleting it will disappear for that after deleting we call display function again
    // arrow func, splice is used to delete element from array with parameters as index and upto which we have to delete
    deleteProduct =(index)=>{
         products.splice(index,1);
         display();
    }

    let updateIndex = null;

    // we are fetching data from table and setting it to upadate field
    // we using this function on update button which fetching the index of the
    // that specific row with what it's index and using that index we adding values to update field.
    setupData=(index)=>{

        document.getElementById('update_form').style.display="block";
        updateIndex = index;
        let product = products[index];
        
        document.getElementById('up_name').value = product.name;
        document.getElementById('up_price').value = product.price;
        document.getElementById('up_quantity').value = product.quantity;
    }
     
    updateProduct = () => {
        let product = {

        };
        // we are getting a values from the input and stored in object property
        // here we are fetching the data from users using there ids and assigning it to the object properties
        product.name= document.getElementById('up_name').value;
        product.price = document.getElementById('up_price').value;
        product.quantity = document.getElementById('up_quantity').value;

        products[updateIndex] = product;

        display();

        document.getElementById('up_name').value = "";
        document.getElementById('up_price').value = "";
        document.getElementById('up_quantity').value = "";
        document.getElementById('update_form').style.display="none";
        updateIndex = null;
    }