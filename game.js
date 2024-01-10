var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = "";
var gamePattern= [];
var mySounds = new Audio();
var userClickedPattern = [];

function playSound(name){
    mySounds.src = "./sounds/" + name + ".mp3";
    mySounds.play();
}

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);
}

$(".btn").on("mousedown", function(){
    console.log(this);
    console.log($(this).attr("id"));
    var userChosenColour = $(this).attr("id"); // does this work?
    console.log(userChosenColour);
    playSound(userChosenColour);
    $(this).animate({opacity: 0.25},500, function(){$(this).delay(500).animate({opacity: 1}, 500);});
    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);
    nextSequence();
});

nextSequence();