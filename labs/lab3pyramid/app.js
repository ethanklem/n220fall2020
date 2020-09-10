function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(255);

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < i; j++) {
      stroke(255);
      fill(219, 24, 24);
      rect(j * 50, i * 50, 50, 50);
    }
  }
}
