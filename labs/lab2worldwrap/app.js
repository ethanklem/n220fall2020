function setup() {
  createCanvas(800, 600);
}

let xPos = 400;

let xSpeed = 5;

function draw() {
  background(0);

  fill(255);
  circle(xPos, 300, 30);

  xPos = xPos + xSpeed;

  if (xPos > 800) {
    xPos = 0;
  }
}
