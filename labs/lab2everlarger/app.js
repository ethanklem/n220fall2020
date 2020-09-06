function setup() {
  createCanvas(1500, 860);
}

let size = 1;

function draw() {
  background(0);

  fill(255);
  circle(750, 430, size);

  size = size + 1;

  if (size > 200) {
    size = 1;
  }
}
