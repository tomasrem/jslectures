const button = document.querySelector(".button");
const popup = document.querySelector(".popup-wrapper");
const closer = document.querySelector(".close");

button.addEventListener("click" , () => {
    popup.style.display = "block";

});


closer.addEventListener("click" , () => {   // refferencting to the close button and closing the banner
    popup.style.display = "none";

});

popup.addEventListener("click" , () => {   // if you click on the space around it closes the banner
    popup.style.display = "none"; 

});