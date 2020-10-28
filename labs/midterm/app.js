    
    //this creates an array for the blocks at the top of screen. Why this code is here is because without this the blocks would not be there.
    var blocks = [];

    //this is creation of object which is the ball without this the ball wouldnt be there
    var ball = { 
    //the next 4 lines are the x and y for ball starting positions
    //and the velocity at which the ball moves which is at a speed of 2 this is neccesary because the speed will make it move at the correct angle down the screen
    x: 100, 
    y: 100,
    velocityX: 2,
    velocityY: 2,
    //the update function will make what the ball looks like and put the velocity into action. The update function will be called upon again inside the draw function. This will make code cleaner having the object information stored inside the object
    update: function() {
    noFill();
    stroke(255, 238, 130);
    circle(this.x, this.y, 10);
    //this is what makes the velocity take charge in the code and it will make the ball move at the starting angle that it does. 
    this.x += this.velocityX;
    this.y += this.velocityY;
    }
    };

    //this is the object for the paddle this is needed for paddle to appear on screen
    var paddle = {
    //the next 4 lines are for the x and y locations for the paddle, and the width and height of the paddle. Without this the paddle wouldnt have a starting placement or a size for paddle.
    x: 100,
    y: 350, 
    w: 150, 
    h: 20,
    //this is the update function again which will change how the paddle looks and how it moves once it is called upon in the draw function. It makes code cleaner having information stored in object itself.  
    update: function() {
    noFill();
    stroke(143, 251, 255);
    //starting location
    rect(this.x, this.y, this.w, this.h);
    //this makes the paddle move when you press on the left and right arrows. It moves at a speed of 2 in either direction. Without this the paddle wouldnt move at all so a keydown is required. 
    if(keyIsDown(LEFT_ARROW)) {
    this.x -= 2;
    }
    
    if(keyIsDown(RIGHT_ARROW)) {
    this.x += 2;
    }
    }
    };

    //this for loop is for the 6 blocks at the top of the screen and it is set to 6 for how many blocks there will be. The i * 60 is for how far apart the blocks are, and the 60 makes it perfectly spread apart. The y is for the y location of the blocks.
    for(var i = 0; i < 6; i++) {
        blocks[i] = { x: i * 60, y: 10 };
    }
    
  
    //this is the function setup which creates the canvas size, and without this code wouldnt work 
    function setup() {
    createCanvas(400, 400);
    }
    
    //this is the draw function, the draw function is how everything on screen is displayed. It's quite literal when it means drawing something. 
    function draw() {
    background(70);
    
    //these are the update functions and that is how the objects from above are called upon in the draw function. This makes the code overall cleaner because you can store all of the objects information inside of the object.
    ball.update();
    paddle.update();

   
    //this is for if ball hits of right side of screen, if ball surpasses 400 on x it bounces opposite direction off wall. Without this the ball would fly past the wall.
    if(ball.x > 400) {
    ball.x = 400;
    ball.velocityX *= -1;
    }
    
    //this is for if ball hits of left side of screen, if ball hits at 0 on x it bounces opposite direction off wall. Without this the ball would fly past the wall.
    if(ball.x < 0) {
    ball.x = 0;
    ball.velocityX *= -1;
    }
    
    //this is for if ball hits of top of screen, if ball hits at 0 on y it bounces opposite direction off wall. Without this the ball would fly past the wall.
    if(ball.y < 0) {
    ball.y = 0;
    ball.velocityY *= -1;
    }
    
    //this uses the hittestpoint function from the bottom of code. These cide means that if the ball makes contact with the paddle then the ball will bounce off in the opposite direction. 
    if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {
    ball.velocityY *= -1;
    }
    
    //this for loop uses the length of the array, which is set to 6 blocks, and without this code block the code falls apart. It is used to loop through all the 6 blocks. This displays the blocks on the screen. 
    for(var i = 0; i < blocks.length; i++) {
    var b = blocks[i];
    rect(b.x, b.y, 60, 20);
    
    //this is a if statement used for if the ball hits off the top of the paddle, and that is why the w and h have set amounts so the ball can hit off the correct spot. 
    if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
    ball.velocityY *= -1;
    
    //remove block from array
    blocks.splice(i, 1);
    }
    }
    }
    
    //this creates the function of the paddle being hit, and this function will be called upon in if statement above. The reasoning is that if the ball hits the paddle then the hit will occur. This is needed for any hit off the paddle to take place. 
    function hitTestPoint(px, py, bx, by, bw, bh) {
    
    if(px > bx && px < bx + bw) {
    if(py > by && py < by + bh) {
    return true;
    }
    }
    
    return false;
    }