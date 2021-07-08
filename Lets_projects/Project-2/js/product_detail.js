console.log("test")

function test() {
    var productString = localStorage.getItem("product")
    console.log(productString)
    var productObj = JSON.parse(productString)
    return productObj;
}

function getDetail() {
    var productObj=test();
    console.log(productObj.imgpath)

    var i = document.getElementById("proImg");
    console.log(i+ " " + typeof(i))
    i.setAttribute("src", productObj.imgpath)

    //name


    console.log(productObj.name)
    var j = document.getElementById("proHeading");
    console.log(j+ " " +typeof(i));
    j.innerHTML = productObj.name;


    /*var productPrice = localStorage.getItem("product")
    console.log(productPrice)*/


    console.log(productObj.price)
    var k = document.getElementById("proPrice");
    console.log(k+ " " + typeof(k))
    k.innerHTML = productObj.price;
}
getDetail();

function myFunction() {
    alert("Item added to Cart!");
  }
  function usFunction() {
    alert("Thankyou! You purchased.");
  }