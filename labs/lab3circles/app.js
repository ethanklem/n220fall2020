function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(200);

  noFill();

  for (var i = 1; i < 40; i++) {
    stroke(0);

    circle(500, 500, i * 10);
  }
}
