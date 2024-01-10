var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = "";
var gamePattern= [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

function playSound(name){
    var mySounds = new Audio();
    mySounds.src = "./sounds/" + name + ".mp3";
    mySounds.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){$("#" + currentColour).removeClass("pressed"),100;})
}

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);
}

$("body").on("keydown", function (){
    if (!gameStarted){
        gameStarted = true;
        level = 0;
        $("h1").text("Level " + level);
    }
}

$(".btn").on("mousedown", function(){
    var userChosenColour = $(this).attr("id"); // does this work?
    console.log(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    //$(this).animate({opacity: 0.25},200, function(){$(this).delay(500).animate({opacity: 1}, 200);});
    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);
});

nextSequence();