
var theCircles = [
  { x: 50, y: 125, r: 10 },
  { x: 30, y: 90, r: 20 },
  { x: 10, y: 200, r: 30 },
];

function setup() {
  createCanvas(400, 300);
  background(50);
}

function draw() {
  fill(20, 60, 80);
  for (var i = 0; i < theCircles.length; i++) {
    let currentCircle = theCircles[i];
    circle(currentCircle.x, currentCircle.y, currentCircle.r);
    currentCircle.x += 1;

    if (currentCircle.x > 450) {
      currentCircle.x = 0;
      currentCircle.y = Math.random() * 300;
    }
  }
}
