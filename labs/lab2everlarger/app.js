function setup() {
  createCanvas(400, 300);
}

let size = 1;

function draw() {
  background(0);

  fill(255);
  circle(200, 150, size);

  size = size + 1;

  if (size > 200) {
    size = 1;
  }
}
