
var colors = [];
var pickedColor;
var numSquares = 6;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisply = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButton();
    setupSquares();
    reset();
}

function setUpModeButton() {
    //mode button event listeners
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisply.textContent = "Correct!";
                changeColors(pickedColor, squares);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisply.textContent = "Try Again!";
            }
        });
    }
}


function reset() {
    //generate all new colors
    colors = generateRandomColor(numSquares);
    //pick a new random colors from array
    pickedColor = pickColor(numSquares);
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisply.textContent = "";
    resetButton.textContent = "New Colors!";
}

// easyBtn.addEventListener("click", function() {
//     hardBtn.classList.toggle("selected");
//     easyBtn.classList.toggle("selected");
//     numSquares = 3;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor(numSquares);
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function() {
//     hardBtn.classList.toggle("selected");
//     easyBtn.classList.toggle("selected");
//     numSquares = 6;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor(numSquares);
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function() {
    reset()
});

function pickColor(num) {
    var random = Math.floor(Math.random() * num);
    return colors[random];
}

function generateRandomColor(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var red = Math.floor(Math.random() * 256);

    //pick a "green" from 0 - 255
    var green = Math.floor(Math.random() * 256);

    //pick a "blue" from 0 - 255
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function changeColors(color, square) {
    //loop through all squares
    for(var i = 0; i < square.length; i++) {
        //change each color to match given color
        square[i].style.backgroundColor = color;
    }
}
