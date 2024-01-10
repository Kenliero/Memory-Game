var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = "";
var gamePattern= [];
var mySounds = new Audio();
var pressedButton = "";

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);
}

$("btn").on("mousedown", function(){
    console.log(this);
    nextSequence();
    $(this).animate({opacity: 0.25},1000);
    mySounds.src = "./sounds/" + randomChosenColour + ".mp3";   // For now plays the correct color, not pressed color 
    mySounds.play();
});
