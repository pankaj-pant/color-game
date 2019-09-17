var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");


init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}


//Setting up difficulty
function setupModeButtons(){
    $(".mode").on("click", function(){
        $(".mode").first().removeClass("selected");
        $(".mode").last().removeClass("selected");
        $(this).addClass("selected");
        if ($(this).text() === "Easy"){
            numSquares = 3;
        } else {
            numSquares = 6;
        }
        reset();
    });
}



//Initializing squares
function setupSquares(){
    $(".square").on("click", function(){
        if($(this).css("background-color") != pickedColor){
            $(this).css("background-color", "#232323");
            $("#guessResult").text("Try again!");
        } else {
            $("#guessResult").text("Correct!");
            changeColor(pickedColor);
            $("h1").css("background-color", pickedColor);
            $("#newColors").text("Play again?");
        }
    });
}


//Reset Button
function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    $("#colorDisplay").text(pickedColor);
    $("#newColors").text("New Colors");
    $("#guessResult").text("");
    $("h1").css("background-color", "steelblue");
    //not sure of the code below, how it might be translated to jQuery
    for (var i = 0; i < $(".square").length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }  
    }

} 


//Select new colors
$("#newColors").on("click", function(){
    reset();
});



//Change color functions
function changeColor(color){
    $(".square").css("background-color", color);
}

//Pick random colors 
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Generate random colors
function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
    // add random color to array
        arr.push(generateColor());    
    }
    //return array  
    return arr;
}

function generateColor(){
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + blue + ", " + green + ")";
}

