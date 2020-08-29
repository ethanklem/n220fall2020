function setup() {
  var grey = (85, 89, 89);

  var start = 209;

  createCanvas(600, 500);

  background(99, 134, 224);

  //The Sun
  fill(209, 119, 59);
  arc(570, 10, 150, 150, 0, PI + QUARTER_PI, OPEN);

  //Beam
  strokeWeight(30);
  fill(0, 0, 0);
  line(30000, 500, 0, 400);

  //Head
  strokeWeight(1);
  fill(grey);
  rect(150, 60, 300, 120);

  //eye
  strokeWeight(5);
  fill(start, 102, 168);
  circle(220, 125, 40);

  //eye
  fill(start, 102, 168);
  circle(380, 125, 40);

  //stroke and color for whole body
  strokeWeight(1);
  fill(grey);

  //body
  rect(235, 210, 120, 100);

  //neck
  rect(285, 180, 20, 40);

  //right leg
  rect(255, 310, 10, 60);

  //left leg
  rect(320, 310, 10, 60);

  //right foot
  rect(235, 370, 30, 15);

  //left foot
  rect(320, 370, 30, 15);

  //box on chest
  fill(240, 192, 192);
  rect(250, 240, 40, 12);

  //button
  fill(240, 192, 192);
  circle(310, 245, 8);

  //button
  fill(240, 192, 192);
  circle(330, 245, 8);

  //mouth
  fill(201, 79, 95);
  rect(280, 150, 30, 15);

  //arms
  strokeWeight(1);
  fill(85, 89, 89);
  rotate(50);
  rect(270, 310, 15, 70);
  rotate(-100);
  rect(285, 160, 15, 70);
}
