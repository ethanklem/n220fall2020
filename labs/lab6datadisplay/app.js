var theBox = {
  w: 50,
  h: 50,
  color: [156, 0, 250],
  x: 175,
  y: 125,
}

function setup() {
  createCanvas(400, 300);
  background(50);
}

function draw() {
  fill(theBox.color);
  rect(theBox.x, theBox.y, theBox.w, theBox.h);
}
