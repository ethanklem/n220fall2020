function setup() {
    createCanvas(400, 300);
}

function draw() {

    background(0)

    circle(mouseX, mouseY, 30);

    if( mouseX < 200) {
        fill(38, 57, 181)
    } else {
        fill(179, 34, 44)
    }


}