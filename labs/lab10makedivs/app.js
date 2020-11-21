var container = document.getElementById("container");

//object array
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];


   for (var i = 0; i < objects.length; i++) {
       theObjects = objects[i]
   var place = document.createElement("div")
   //styling height
   place.style.height = theObjects.height + "px";
   //styling width
   place.style.width = theObjects.width + "px";
   //styling background color
   place.style.backgroundColor = theObjects.color
   //places container variable 
   container.appendChild(place)
}
   
