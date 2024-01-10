var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = "";
var gamePattern= [];
var mySounds = new Audio();
mySounds.src = "./sounds/green.mp3";
var pressedButton = "";

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);
}

$("button").on("mousedown", function(event){
    console.log(event);
    nextSequence();
    $(this).animate({opacity: 0.25},1000);
    mySounds.src = "./sounds/" + randomChosenColour + ".mp3";   // For now plays the correct color, not pressed color 
    mySounds.play();
});


//$("button").hasClass("randomChosenColour").animate({backgroundColor: "#000000"},1000);

// .animate({backgroundColor: "#ff0000"}, 1000);