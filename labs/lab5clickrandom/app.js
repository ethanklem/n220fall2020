let colors = ["#eb9e34", "#34a2eb", "#eb344f", "#04b08d"];

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(50);

  circle(200, 150, 125);
}

function mousePressed() {
  let click = random(colors);
  fill(click);
}
