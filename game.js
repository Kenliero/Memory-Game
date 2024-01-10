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

function showPattern(){
    for (i = 0; i < gamePattern.length;i++){
        $("." + gamePattern[i]).delay(i * 100).animate({opacity: 0.25},200, function(){$(this).delay(100).animate({opacity: 1}, 200);});
     }
}

function checkAnswer(level){

}

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);
    level++;
    $("h1").text("Level " + level);
    // Show pattern
    showPattern();
}

$("body").on("keydown", function (){
    if (!gameStarted){
            gameStarted = true;
            level = 0;
            nextSequence();
        }
});

$(".btn").on("click", function(){
    if (!gameStarted){
        gameStarted = true;
        level = 0;
        nextSequence();
    } else {
        var userChosenColour = $(this).attr("id"); // does this work?
        playSound(userChosenColour);
        animatePress(userChosenColour);
        //$(this).animate({opacity: 0.25},200, function(){$(this).delay(500).animate({opacity: 1}, 200);});
        userClickedPattern.push(userChosenColour);
        console.log(userChosenColour);
        //nextSequence();
    }
});