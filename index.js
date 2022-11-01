// alert("working");

// for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++)

for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++)
{
    // function audio()
    // {
    //     var num = i+1 ;
    //     var audio = new Audio("sounds/tom-" +i+ ".mp3") ; 
    //     audio.play() ;
    //     console.log("hello") ;
    // }

    // document.querySelectorAll("button")[i].addEventListener("click" , audio)

// Detection button press

    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

        var buttionInnerHTML = this.innerHTML ;

        makeSound(buttionInnerHTML) ;
        buttonAnimation(buttionInnerHTML);

    });
    
}

//Detecting Keyboard Press

document.addEventListener("keydown" , function(event){

    makeSound(event.key) ;
    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch (key) {
            case "w":
                    var audio = new Audio("sounds/tom-1.mp3") ; 
                    audio.play() ;
                break;

            case "a":
                    var audio = new Audio("sounds/tom-2.mp3") ; 
                    audio.play() ;
                break;
                
            case "s":
                    var audio = new Audio("sounds/tom-3.mp3") ; 
                    audio.play() ;
                break;
                
            case "d":
                    var audio = new Audio("sounds/tom-4.mp3") ; 
                    audio.play() ;
                break;

            case "j":
                    var audio = new Audio("sounds/snare.mp3") ; 
                    audio.play() ;
                break;

            case "k":
                    var audio = new Audio("sounds/kick-bass.mp3") ; 
                    audio.play() ;
                break;

            case "l":
                    var audio = new Audio("sounds/crash.mp3") ; 
                    audio.play() ;
                break;
        
            default:console.log(buttonInnerHTML)
                break;
        }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey) ; 

    activeButton.classList.add("pressed") ;   //Adding css

    setTimeout(function(){
        activeButton.classList.remove("pressed") ;
    } , 100 ) ;    //removing class with delay of 0.1 sec 

}