
//creates the variable for the X
var X = 'x'
//creates the variable for the O
var O = 'O'


//grabs the cells
var cells = document.querySelectorAll('[data-info]')

//grabs the board
var board = document.getElementById('board')



//grabs the winning message
var winningMessageElement = document.getElementById('winningMessage')

//grabs the winning message text
var winningMessageTextElement = document.querySelector('[data-winning-message-text]')



//initiates the start of the game
start()


//function of starting game
function start() {
    //starts with player X
    oTurn = false
    //to start game remove the x's and o's from the board of the previous game
    //loops through the cells
    cells.forEach(cell => {
        //removes the x and o from previous game
        cell.classList.remove(X)
        cell.classList.remove(O)
        //resets the event listner
        cell.removeEventListener('click', handleClick)
        //handle click once so you can only click on a cell one time
        cell.addEventListener('click', handleClick, {once: true})
    })
    //sets the hover class back
    hover()
    //remove the winning message text
    winningMessageElement.classList.remove('show')
}

//handles click function lets it know when cell is clicked
function handleClick(any) {
    //target the cell that was clicked
    let cell = any.target
    //current class is if its o its o's class and if its x its x class
    let currentClass = oTurn ? O : X
    //calls to the place function
    place(cell, currentClass)
    //check win function called
    if (checkWin(currentClass)) {
        endGame(false)
        //if its a draw call the draw function
    } else if (isDraw()) {
        endGame(true)
    } else {
        //calls to swap turn function
        swapTurns()
        //calls to create the hovering affect
        hover()
    }
}

//hover class function to make it hover on specific class
function hover() {
    //remove the x and o classes that are set on it
    board.classList.remove(X)
    board.classList.remove(O)
    //if else statment 
    //if o turn set the hover class to o
    //if x turn set the hover class to x
    if (oTurn) {
        board.classList.add(O)
    } else {
        board.classList.add(X)
    }
}

//this functions makes it add whatever is the current class
//whether thats x or o
function place(cell, currentClass) {
    cell.classList.add(currentClass)
}

//makes it swap turns. makes it when its o's turn
//it switches to opposite of o's which is x after the move
function swapTurns() {
    oTurn = !oTurn
}

//creates array for the winning combination of numbers
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//function for checking for the win
function checkWin(currentClass) {
    //will return true if any values are true and loop through all combinations
   return win.some(combination => {
       //if current class is in all three elements then it creates a winner
       //classList grabs the class to see if its in all 3
       return combination.every(index => {
            return cells[index].classList.contains(currentClass)
       })
   })
}

//end game function
function endGame(draw) {
    //if its a draw winning message states draw
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
        //if its a win, winning message states who won
    } else {
        winningMessageTextElement.innerText = `${oTurn ? "O's" : "X's"} Wins!`
    }
    //show the winning message
    winningMessageElement.classList.add('show')
}

//checks to see if every cell is filled up with a class
//if it is then it is a draw
function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains(X) ||
        cell.classList.contains(O)
    })
}

//grabs the restart button
var replayButton = document.getElementById('replayButton')

//when restart button is clicked it starts a newgame
replayButton.addEventListener('click', start)

