var theCircle = {
    color: [156, 0, 250],
    x: 175,
    y: 125,
    r: 20
  }
  
  function setup() {
    createCanvas(400, 300);
    background(50);
  }
  
  function draw() {
    fill(theCircle.color);
    circle(theCircle.x, theCircle.y, theCircle.r);
    theCircle.x = theCircle.x +=1;
  }
  