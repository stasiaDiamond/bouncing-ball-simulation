// go into the DOM (document) and get each ball's id
var ball = document.getElementById("ball");
var ball2 = document.getElementById("ball2");
var ball3 = document.getElementById("ball3");
var ball4 = document.getElementById("ball4");

// create variables for the velocity and position of small balls
var velocityX = 4;
var velocityY = 2;
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

// create variables to declare which direction to move the balls first
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


  // Set the ball's position in the div and concatenate the number with px to make them pixels
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";

  ball2.style.left = positionX + 50 + "px";
  ball2.style.top = positionY + 50 + "px";

  ball3.style.left = positionX + 200 + "px";
  ball3.style.top = positionY + 200 + "px";

  // big ball
  ball4.style.left = positionXbig + "px";
  ball4.style.top = positionYbig + "px";

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
