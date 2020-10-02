// for my personal composition I just wanted to expand upon the bounce off lab and create and infinite bouncing ball that also bounces of the sides of the canvas.

//variables for bottom rectangle
let rectX = 0;
let rectY = 580;
let rectW = 900;
let rectH = 10;

//variables for top rectangle
let rect2X = 0;
let rect2Y = 10;
let rect2W = 900;
let rect2H = 10;

//variables for middle rectangle
let rect3X = 400;
let rect3Y = 300;
let rect3W = 100;
let rect3H = 10;

//variables for circle
let circleX = 0;
let circleY = 100;

//variables for speed
velX = 1;
velY = 8;

//creating canvas
function setup() {
  createCanvas(900, 600);
}

//drawing the circle and rectangles 
function draw() {
  background(100);
  fill("#451c61");
  noStroke();
  circle(circleX, circleY, 20);
  circleX = circleX + velX;
  circleY = circleY + velY;
  rect(rectX, rectY, rectW, rectH);

  rect(rect2X, rect2Y, rect2W, rect2H);

  fill("#bd60ac");
  rect(rect3X, rect3Y, rect3W, rect3H);

  //the collisions for all of the circle to rectangle collisions. Makes the speed go in opposite direction for continous movement.
  if (collideRect(circleX, circleY + 15, rectX, rectY, rectW, rectH)) {
    velY = velY * -1;
  }

  if (collideRect2(circleX, circleY - 15, rect2X, rect2Y, rect2W, rect2H)) {
    velY = velY * -1;
  }

  if (collideRect3(circleX, circleY + 15, rect3X, rect3Y, rect3W, rect3H)) {
    velY = velY * -1;
  }
  if (collideRect3(circleX, circleY - 15, rect3X, rect3Y, rect3W, rect3H)) {
    velY = velY * -1;
  }

  //these if statments make the circle bounce off the sides of the canvas. 
  if (circleX > 900) {
    velX = -1;
  }

  if (circleX < 0) {
    velX = 1;
  }
}

//this allows the collision between circle and bottom  rectangle
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {
  var colliding = false;

  if (circleX > rectX && circleX < rectX + rectW) {
    if (circleY > rectY && circleY < rectY + rectH) {
      return true;
    }
  }
  return false;
}

//this allows the collision between circle and top rectangle
function collideRect2(circleX, circleY, rect2X, rect2Y, rect2W, rect2H) {
  var colliding = false;

  if (circleX > rect2X && circleX < rect2X + rect2W) {
    if (circleY > rect2Y && circleY < rect2Y + rect2H) {
      return true;
    }
  }
  return false;
}

//this allows the collision between circle and middle rectangle
function collideRect3(circleX, circleY, rect3X, rect3Y, rect3W, rect3H) {
  var colliding = false;

  if (circleX > rect3X && circleX < rect3X + rect3W) {
    if (circleY > rect3Y && circleY < rect3Y + rect3H) {
      return true;
    }
  }
  return false;
}
