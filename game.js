var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = "";
var gamePattern= [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;
var success = true;
var buttonAccess = false;

function playSound(name){
    var mySounds = new Audio();
    mySounds.src = "./sounds/" + name + ".mp3";
    mySounds.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){$("#" + currentColour).removeClass("pressed");},100);
}

function showPattern() {
    for (var i = 0; i < gamePattern.length; i++) {
        // Use let to create a new scope for i in the setTimeout function
        let index = i;
        setTimeout(function() {
            $("." + gamePattern[index]).animate({ opacity: 0.25 }, 200).delay(100).animate({ opacity: 1 }, 200);
            playSound(gamePattern[index]);

            // Check if this is the last iteration
            if (index === gamePattern.length - 1) {
                // This is the last iteration, update the h1 element
                setTimeout(function() {
                    $("h1").html("<h1 id='level-title'>Now your turn to repeat...</h1>");
                    buttonAccess = true;                
                }, 600); // Adjust the delay as needed
            }
        }, i * 500); // Adjust the delay as needed
    }
}

function checkAnswer(currentlevel){
    for (var i = 0; i < gamePattern.length;i++) {
        if (gamePattern[i] !== userClickedPattern[i]) {success = false};
    }
    if (success === true) {
        resetRound();
    } else {
        $("h1").addClass("smallText");
        $("h1").html("<h1 id='level-title'>You made a mistake... Click <button class='startButton'>Start</button> to try Again</h1>");
        playSound("wrong");
    }
}

function resetGame(){
    success = true;
    gameStarted = false;
    gamePattern.length = 0;
    userClickedPattern.length = 0;
    level = 0;
    randomChosenColour = "";
}

function resetRound(){
  userClickedPattern.length = 0;
}

function nextSequence(){
    buttonAccess = false;  
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    //playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    level++;
    if ($("h1").hasClass("smallText")){$("h1").removeClass("smallText");}
    $("h1").html("<h1 id='level-title'>Simon Shows Level " + level + "</h1>");
    // Show pattern
    setTimeout(function() {showPattern();}, 1000); // delay by 1 second, before showing the pattern
}

$(document).on("click", ".startButton", function(){
    resetGame();
    if ($("h1").hasClass("smallText")){$("h1").removeClass("smallText");}
    gameStarted = true;
    nextSequence();
});

$(".btn").on("click", function(){
    if (buttonAccess) {
        if (gameStarted){
            if (userClickedPattern.length < gamePattern.length) {
                var userChosenColour = $(this).attr("id");
                playSound(userChosenColour);
                animatePress(userChosenColour);
                userClickedPattern.push(userChosenColour);
                }      
            if (userClickedPattern.length === gamePattern.length) {
            checkAnswer(userClickedPattern.length -1);
            if (success === true ) {
                nextSequence()
            } else {
                gameStarted = false;
                resetGame();
            }
            }   
        }
    }     
});