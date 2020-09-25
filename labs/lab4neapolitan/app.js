let colors = ["#ff99ff", "#99ffdd", "#fff7e7"];

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(50);

  for (var i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(80 + i * 75, 125, 75, 50);
  }
}

