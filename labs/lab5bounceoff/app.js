
//variables for rectangle x and y location.
let rectX = 0;
let rectY = 550;

//variables for rectangle width and height
let rectW = 900;
let rectH = 30;

//variables for circle x and y position to start.
let circleX = 0;
let circleY = 0;

//variables for speed
velX = 6;
velY = 6;

function setup() {
  //creation of canvas
  createCanvas(900, 600);
}

function draw() {
  //the drawing off the circle and rectangle.
  background(50);
  fill("#cf5f75");
  noStroke();
  circle(circleX, circleY, 50);
  circleX = circleX + velX;
  circleY = circleY + velY;
  rect(rectX, rectY, rectW, rectH);

  //this if statement makes the ball bounce off the opposite direction at whatever speed you change it to.
  if (collideRect(circleX, circleY + 45, rectX, rectY, rectW, rectH)) {
    velY = velY * -1;
  }

  //this if statement makes the circle restart at top left of screen if ball goes past 900 pixels.
  if (circleX >= 900) {
    circleX = 0;
    circleY = 50;
    velY = 5;
  }
}

//collision function allows for the colliding between circle and rectangle.
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {
  var colliding = false;
  if (circleX > rectX && circleX < rectX + rectW) {
    if (circleY > rectY && circleY < rectY + rectH) {
      return true;
    }
  }
  return false;
}
