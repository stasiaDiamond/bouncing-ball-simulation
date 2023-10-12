// go into the DOM (document) and get each ball's id
var ball = document.getElementById("ball");
var ball2 = document.getElementById("ball2");
var ball3 = document.getElementById("ball3");
var ball4 = document.getElementById("ball4");

// create variables for the velocity of all balls
var velocityX = 4;
var velocityY = 2;

// create variables for starting position of small balls
var positionX = 0;
var positionY = 0;

// create variable for starting position of big ball
var positionXbig = 650;
var positionYbig = 200;

// Define minimum and maximum boundaries of both X and Y
var Xmin = 0;
var Xmax = 650;
var Ymin = 0;
var Ymax = 200;

// create variables to declare which direction to move the balls when they start
// positive for right, negative for left
var directionX = 1;
var directionY = 1;
var directionXbig = -1;
var directionYbig = -1;


// function to change the position of the HTML element "ball"
function moveBall() {
  // positionX is where the ball exists along the X axis in that moment
  // positionX will be updated and changed based on the velocity and direction traveled
  // so positionX is "(+=)added to/becomes/also is changed by" velocity * direction
  positionX += directionX * velocityX;
  positionXbig += directionXbig * velocityX;

  // same as above for positionY
  positionY += directionY * velocityY;
  positionYbig += directionYbig * velocityY;


  // Set the ball's position in the div and concatenate the number with px to make them pixels so when HTML document reads it, it looks correct to it
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";

  ball2.style.left = positionX + 50 + "px";
  ball2.style.top = positionY + 50 + "px";

  ball3.style.left = positionX + 200 + "px";
  ball3.style.top = positionY + 200 + "px";

  // big ball
  ball4.style.left = positionXbig + "px";
  ball4.style.top = positionYbig + "px";
  // ball.style.left broken down:
  // ball.____.___ states we're dealing with an element we gave the id of ball on line 1
  // ____.style.____ states we're accessing the inline CSS properties of the element we named with the id "ball". Go into your CSS file and find #ball ( an id in a CSS file looks like this # )
  // ___.___.left in your CSS file under #ball, one of it's key value pairs is left: 0px. This states that we're about to change that to whatever we type after the equals sign ( assignment singular = )


  // if the lead small balls have reached the x and y-axis boundaries, reverse direction by setting it to (-)
  if (positionX >= Xmax || positionX <= Xmin) {
    directionX = -directionX;
  }

  if (positionY >= Ymax || positionY <= Ymin) {
    directionY = -directionY;
  }

  // if the big ball has reached the x and y-axis boundaries, reverse direction by setting it to (-)
  if (positionXbig >= Xmax || positionXbig <= Xmin) {
    directionXbig = -directionXbig;
  }

  if (positionYbig >= Ymax || positionYbig <= Ymin) {
    directionYbig = -directionYbig;
  }
}

// Call the moveBall function every 10ms
setInterval(moveBall, 10);



// The Codio assignment for this Module activity was extremely misleading and many of my classmates were frustrated. The test suites did not allow many correct functions to pass. It was quite the surprise to find that even copy pasta of the "Solved File" didn't pass the test suites either. 
// I finally got it to work with the below code. I hope this helps someone in the future!


// var ball = document.getElementById("ball");
// var velocity = 100;
// var positionX = 0;
// var reverse = false;
// var positionY = 0; 

// function moveBall() {
//   var Xmin = 0;
//   var Xmax = 300;
//   var Ymin = 0;
//   var Ymax = 300;

//   if (!reverse) {
//     positionX += velocity; 
//     positionY += velocity;
//   } else {
//     positionX -= velocity;
//     positionY -= velocity;
//   }

//   if (positionX >= Xmax || positionX <= Xmin || 
//   positionY >= Ymax || positionY <= Ymax) {
//     reverse = !reverse;
//   }

//   ball.style.left = positionX + "px";
//   ball.style.top = positionY + "px";
// }

// setInterval(moveBall, 100);
