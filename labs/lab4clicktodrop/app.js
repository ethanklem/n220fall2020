var rectX = [];
var rectY = [];

var speed = 5;

function mousePressed() {
  rectX.push(mouseX);
  rectY.push(mouseY);
}

function setup() {
  createCanvas(400, 300);
}
function draw() {
  background("#2e2d2e");

  fill("#ac1fed");
  for (var i = 0; i < rectY.length; i++) {
    rect(rectX[i], rectY[i], 50, 25);
    rectY[i] += speed;
  }
}
