function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(200);

  for (var i = 0; i < 25; i++) {
    circle(i * 20, 150, 5);

    if (i % 15 === 0) {
      fill(35, 104, 217);
    } else if (i % 5 === 0) {
      fill(45, 189, 55);
    } else if (i % 3 === 0) {
      fill(112, 53, 181);
    } else {
      fill(0);
    }
  }
}
