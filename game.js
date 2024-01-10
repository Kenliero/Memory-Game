var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = "";
var gamePattern= [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;
var goNext = false;

function playSound(name){
    var mySounds = new Audio();
    mySounds.src = "./sounds/" + name + ".mp3";
    mySounds.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){$("#" + currentColour).removeClass("pressed");},100);
}

function showPattern(){
    for (var i = 0; i < gamePattern.length;i++){
        $("." + gamePattern[i]).delay(i * 100).animate({opacity: 0.25}, 200).delay(100).animate({opacity: 1}, 200);        
     }
}

function checkAnswer(currentlevel){
    var success = true;
    for (var i = 0; i < gamePattern.length) {
        if (gamePattern[i] != userClickedPattern[i]) {success = false};
    }
    if (success === true) {
       $("h1").text("SUCCESS!!!");
    } else {
        $("h1").text("You made a mistake...");       
    }
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
        if (userClickedPattern.length < gamePattern.length) {
            var userChosenColour = $(this).attr("id");
            playSound(userChosenColour);
            animatePress(userChosenColour);
            //$(this).animate({opacity: 0.25},200, function(){$(this).delay(500).animate({opacity: 1}, 200);});
            userClickedPattern.push(userChosenColour);
            console.log(userChosenColour);
            //nextSequence();
        } else {
            checkAnswer(userClickedPattern.length -1);
            userClickedPattern.length = 0; // clear user clicked            
        }
    }
});