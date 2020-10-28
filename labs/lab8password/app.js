let username = document.getElementById("username");
let password = document.getElementById("password");
let loginResult = document.getElementById("loginResult");

let correctUser = "Username";
let correctPass = "Password";

function submitLog() {
    let userInput = username.value
    let passInput = password.value
    
    if (userInput == correctUser && passInput == correctPass  ) {

        loginResult.innerHTML = "Success"

    } else {
        loginResult.innerHTML = "Failed"
    }
   
}
