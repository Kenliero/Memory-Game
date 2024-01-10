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

$(".btn").on("mousedown", function(){
    console.log(this);
    nextSequence();
    console.log($(this).attr("id"));
    var userChosenColour = $(this).attr("id"); // does this work?
    console.log(userChosenColour);
    mySounds.src = "./sounds/" + userChosenColour + ".mp3";
    mySounds.play();
    $(this).animate({opacity: 0.25},500, function(){$(this).delay(500).animate({opacity: 1}, 500);});
});