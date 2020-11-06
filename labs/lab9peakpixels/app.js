let div = document.getElementById("thediv");

function getLarger() {
    width *= 1.1; 
    height *= 1.1; 
    div.style.width = width + "px";
    div.style.height = height + "px";
}


width = 100;
height = 100; 
div.style.width = width + "px";
div.style.height = height + "px";
div.style.backgroundColor = "#1f2021";

