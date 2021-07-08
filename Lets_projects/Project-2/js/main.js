var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


//function to add product in local 
function addToLocal(product) {
 // event.preventDefault();
  console.log("in add fun..")
  localStorage.removeItem("product");
  localStorage.setItem("product", JSON.stringify(product));

  // console.log(product);
  // json = JSON.stringify(product);
  // console.log(JSON.stringify(product));
}
function myFunction() {
  alert("Your Message sent.")
  
}