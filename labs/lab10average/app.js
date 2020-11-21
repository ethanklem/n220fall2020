var numbers = document.getElementById("numbers");
var calculation = document.getElementById("theCalculation");

//sets the start
var avg = 0;
var sum = 0;


function submitNum() {
 
//splits the numbers after each comma into seperate arrays
var splitting = numbers.value.split(",")


for (i = 0; i < splitting.length; i++) {
    var nums = Number(splitting[i]);
    
    //the sum and avg math 
    sum = sum + nums;
    avg = sum / splitting.length;
    
    //displaying the data
    calculation.innerHTML = "Average: " + avg + "    sum: " + sum;

    console.log(splitting)
    console.log("Average: " + avg)
    console.log("Sum: " + sum)
}
}




