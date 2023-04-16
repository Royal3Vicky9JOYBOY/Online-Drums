// for (var i=0; i<document.querySelectorAll("button"))
// for (var i=0; i<document.querySelectorAll(".drum").length)
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i=0; i<numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     // alert("I got clicked");
//
//     // var audio = new Audio("sounds/tom-1.mp3");
//     // audio.play();
//   //what to do when click detected.
// console.log(this.innerHTML);
//
//   });
//
// }
//Detecting Butoon Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // console.log(this.style.color="white");
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting Keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

 function makeSound(key) {

   switch (key) {
     case "a":
       var crash = new Audio("sounds/2.mp3");
       crash.play();
       break;

     case "w":
       var kick = new Audio("sounds/1.mp3");
       kick.play();
       break;

     case "s":
       var snare = new Audio("sounds/3.mp3");
       snare.play()
       break;

     case "d":
       var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play()
       break;

     case "j":
       var tom2 = new Audio("sounds/tom-2.mp3");
       tom2.play()
       break;

     case "k":
       var tom3 = new Audio("sounds/tom-3.mp3");
       tom3.play()
       break;

     case "l":
       var tom4 = new Audio("sounds/tom-4.mp3");
       tom4.play()
       break;


     default:console.log(buttonInnerHTML);


 }
}

function buttonAnimation(currentKey) {
 var activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");
 setTimeout(function() {
   activeButton.classList.remove("pressed");
 },100);
}
