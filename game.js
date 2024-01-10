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

function showPattern() {
    for (var i = 0; i < gamePattern.length; i++) {
        // Use let to create a new scope for i in the setTimeout function
        let index = i;
        setTimeout(function() {
            $("." + gamePattern[index]).animate({ opacity: 0.25 }, 200)
                .delay(100)
                .animate({ opacity: 1 }, 200);
            playSound(gamePattern[index]);
        }, i * 500); // Adjust the delay as needed
    }
}

function checkAnswer(currentlevel){
    var success = true;
    for (var i = 0; i < gamePattern.length;i++) {
        if (gamePattern[i] != userClickedPattern[i]) {success = false};
    }
    if (success === true) {
       $("h1").text("SUCCESS!!!");
       resetRound();
    } else {
        $("h1").addClass("smallText");
        $("h1").text("You made a mistake... Click to try Again");
        resetGame();    
    }
}

function resetGame(){
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
        resetGame();
            if ($("h1").hasClass("smallText")){$("h1").removeClass("smallText");}
            gameStarted = true;
            nextSequence();
        }
});

$("body").on("click", function(){
    if (!gameStarted){
        resetGame();
        gameStarted = true;
        if ($("h1").hasClass("smallText")){$("h1").removeClass("smallText");}
        nextSequence();
    }
});

$(".btn").on("click", function(){
    if (gameStarted){
        if (userClickedPattern.length < gamePattern.length) {
            var userChosenColour = $(this).attr("id");
            playSound(userChosenColour);
            animatePress(userChosenColour);
            console.log("player: " + userClickedPattern.length + " & Game: " + gamePattern.length);
            userClickedPattern.push(userChosenColour);
            console.log(userChosenColour);
            }      
        }
        if (userClickedPattern.length === gamePattern.length) {
        checkAnswer(userClickedPattern.length -1);
        nextSequence();
        }    
});