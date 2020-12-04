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

    //answers appear
    let answer = event.target.getAttribute("data-answer")
    event.target.outerHTML = answer;
    

    console.log(answer)

}