//the neded varia les to store the game data 

    //the game pattern chanra teng list 
    var buttonolours = ["red","blue","green","yellow"];

    //the games pattern and user click pattern list for comparing 
        var gamePattern =[];

        var userClickedPattern=[];

    //game starting  statys and levil info
        var started = false ;
        var level =0;




//key press recognition 

$(document).keypress(function () {
    if(!started){
        $("#level-title").text("level" + level);
        nextSequence();
        started = true;

    } 
    
});

        //click recognizeng function 

    $(".btn").click(function () { 
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);


        playSound(userChosenColour);
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length-1);
        
    });



// game functions  
function checkAnswer(currentlevel){
    if(gamePattern[currentlevel] === userClickedPattern[currentlevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout( function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("game over, press any key to restart ");
        
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
}





    function nextSequence(){

            // creating user click patern list and incresing the level 
            userClickedPattern=[];
            level++;

            // updateng the h1 
            $("#level-title").text("level"+ level);

            // creating a sequence of random numbers 
            var randomNumber = Math.floor(Math.random() * 4);
            //chosing an color from the firs colour list that we created 
            // in the firs stips 
            var randomChosenColour = buttonolours[randomNumber];
            // pushin the random chosed colors to the game patterns empty list 
            gamePattern.push(randomChosenColour);

            // the animation and sound playing 
            $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomChosenColour);

    }

    // animate the pressed color box 

    function animatePress(currentColor){
        $("#" + currentColor ).addClass("pressed");
        setTimeout(function(){
            $("#" + currentColor).removeClass("pressed");
        }, 100);
    }
// plaes the sounds 

    function playSound(name){
        var audio = new Audio("sounds/"+name+".mp3");
        audio.play();
    }
    
// game over function 

    function startOver(){
        level= 0;
        gamePattern=[];
        started=false;
    }

// anser chek function 

