//the base speed of ball
let xSpeed = -8;
let ySpeed = -8;


// object for the pong ball
var pongBall = {
  color: [156, 0, 250],
  x: 600,
  y: 430,
  r: 20, 
    update: function() {
        fill(this.color);
        circle(this.x, this.y, this.r);
        pongBall.x = pongBall.x + xSpeed;
        pongBall.y = pongBall.y + ySpeed;
        if ((pongBall.y <= 10) || (pongBall.y >= 850)) { 
            ySpeed = ySpeed * -1;
        } else if ((pongBall.x <= 0) || (pongBall.x >= 1488)) { 
            pongBall.x = 700, pongBall.y = 400, xSpeed = -3, ySpeed = -3;
        }
    }
}
 

//object for pong paddle
var pongPaddle = {
  color: [156, 0, 250],
  x: 1300,
  y: 430,
  w: 20,
  h: 150,
  update: function () {
    fill(pongPaddle.color);
    rect(pongPaddle.x, mouseY, pongPaddle.w, pongPaddle.h);
    pongPaddle.y = mouseY;

    if(pongPaddle.y <= 0) {
      pongPaddle.y = 0;
    } else if (pongPaddle.y >= 860 - pongPaddle.h) {
      pongPaddle.y = 860 - pongPaddle.h;
    }
    rect(pongPaddle.x, pongPaddle.y, pongPaddle.w, pongPaddle.h);
  }
};

function setup() {
  createCanvas(1488, 860);
}

function draw() {
  background(50);

  //puts the objects in draw function
  pongPaddle.update();
  pongBall.update();


//bouncing off the walls
  if (pongBall.x < 10) {
    xSpeed += 3;
  }

  if (pongBall.y < 10) {
    xSpeed += 3;
  }


  //if statement that is if the bounce occurs then speed randomizes and bounces the other direction
  if (
    bounce(
      pongPaddle.x,
      mouseY,
      pongPaddle.w,
      pongPaddle.h,
      pongBall.x + 17,
      pongBall.y + 5
    )
  ) {

    //random speed of the bounce
    xSpeed = random(-5,-8);
    ySpeed = random(-5,-8);
  }

  //bounce function that creates the bounce ability
  function bounce(
    pongPaddleX,
    pongPaddleY,
    pongPaddleW,
    pongPaddleH,
    pongBallX,
    pongBallY
  ) {
    var hit = false;
    if (pongBallX >= pongPaddleX && pongBallY >= pongPaddleY) {
      if (
        pongBallX <= pongPaddleX + pongPaddleW &&
        pongBallY <= pongPaddleY + pongPaddleH
      ) {
        hit = true;
      }
    }
    return hit;
  }
}


