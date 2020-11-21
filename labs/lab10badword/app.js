function submitString() {

    //gets the words inputted
    var words = document.getElementById("words").value;
  
    //splits the words by space
    var split = words.split(" ");
   
    //sets the badwords
    var badWords = ["clear", "water", "tires"];
    
   
    //finding bad words
    var foundWords = split.filter(el => badWords.includes(el));
    
    //displays to document
    document.getElementById("ifWords").innerHTML = foundWords.join(", ");
    document.getElementById("totalWords").innerHTML = foundWords.length;
    
    
  }

