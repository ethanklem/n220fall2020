let block = document.getElementById("block");
let color = document.getElementById("color");
block.style.backgroundColor = "rgb(0, 0, 0)";
block.style.width = "800px";
block.style.height = "200px";

let red = 0;
let green = 0;
let blue = 0;


function changeColor(event) {
    var getColor = event.target.getAttribute("data-color");
    var getValue = event.target.getAttribute("data-value");
    
    if(getColor == "red") {
        if(getValue == 1){
            red++;
        } else if(getValue == 5) {
            red+= 5;
        } else if(getValue == 10) {
            red += 10;
        }
    }
    else if(getColor == "green") {
        if(getValue == 1){
            green++;
        } else if(getValue == 5) {
            green += 5;
        } else if(getValue == 10) {
            green += 10;
        }
    }
    else if(getColor == "blue") {
        if(getValue == 1){
            blue++;
        } else if(getValue == 5) {
            blue+= 5;
        } else if(getValue == 10) {
            blue+= 10;
        }
    }

    console.log("rgb(" + red +", " + green +", " + blue +")")

}