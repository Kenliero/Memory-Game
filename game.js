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
    //for (i = 0; i < buttonColours.length;i++) {
    //mySounds.src = "./sounds/" + randomChosenColour + ".mp3";
    //mySounds.play();
    //}
    //if ($(this).hasClass(randomChosenColour) === buttonColours[i]) {
});
