let positionsX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let positionsY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  positionsX.shift();
  positionsX.push(mouseX);
  positionsY.shift();
  positionsY.push(mouseY);

  background(25);

  for (var i = 0; i < 10; i++) {
    fill(95, 72, 224);
  
    circle(positionsX[i], positionsY[i], 30);
  }
}
