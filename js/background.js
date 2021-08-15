const images = ["0.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = `img/${chosenImage}`;

window.onload = function(){
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(51,51,51,0.3), rgba(221,24,24,0.41)), 
    url(${bgImage})`;
}