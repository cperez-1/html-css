
let boton_cookie = document.getElementById("btn_cookie");
let image_discover = document.getElementById("img_discover");
let image_cart = document.getElementById("img_cart"); 


boton_cookie.addEventListener("click", hide_cookie);
image_cart.addEventListener("click", function() {
    alert("Your cart is empty");
});
image_discover.addEventListener("mouseover", change_image1);
image_discover.addEventListener("mouseout", change_image2);

function hide_cookie(){
    let cookie = document.querySelector("#cookie");
    cookie.remove();
}

function change_image1(){
    image_discover.src="assets/succulents-1.jpg";
}

function change_image2(){
    image_discover.src="assets/succulents-2.jpg";
}



