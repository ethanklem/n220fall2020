//grabbing elements by ID
let element = document.getElementById("event")
let elementTwo = document.getElementById("eventTwo")
let elementThree = document.getElementById("eventThree")
//event listeners 
element.addEventListener("click", itsClicked)
elementTwo.addEventListener("click", itsClicked)
elementThree.addEventListener("click", itsClicked)



function itsClicked(event) {
    console.log(event.target)

    //changecolor
    let newColor = event.target.getAttribute("data-color")
    event.target.style.backgroundColor = newColor;

}