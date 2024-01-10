var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = "";
var gamePattern= [];
var mySounds = new Audio();

$("button").on("mousedown", function(event){
    nextSequence();
    console.log(event);
    $("button").hasClass("randomChosenColour").animate({backgroundColor: "#000000"},1000);
    // mySounds.play($(event.click));
})

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push[randomChosenColour];
}

//nextSequence();
//$("button").hasClass("randomChosenColour").animate({backgroundColor: "#000000"},1000);

// .animate({backgroundColor: "#ff0000"}, 1000);