var drumButtonTab       = document.querySelectorAll(".drum");
var numberOfdrumButtons = drumButtonTab.length;

// ================================= //
//      MOUSE CLICK DETECTION        //
// ================================= //

for (var i = 0; i < numberOfdrumButtons; i ++)
{
    drumButtonTab[i].addEventListener("click", handleClick);
}

function handleClick()
{
    var pressedKey = this.innerHTML;
    selectSound(pressedKey);
    buttonAnimation(pressedKey);
}

// ==================================== //
//      KEYBOARD PRESS DETECTION        //
// ==================================== //

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event)
{
    var pressedKey = event.key;
    selectSound(pressedKey);
    buttonAnimation(pressedKey);
}

// ================= //
//      UTILS        //
// ================= //

function selectSound(pressedKey)
{
    var soundPath = "";
    switch (pressedKey)
    {
        case 'a':
            soundPath = "../sounds/kick-bass.mp3";
            playSound(soundPath);
            break;
        case 's':
            soundPath = "../sounds/snare.mp3";
            playSound(soundPath);
            break;
        case 'd':
            soundPath = "../sounds/tom-1.mp3";
            playSound(soundPath);
            break;
        case 'f':
            soundPath = "../sounds/tom-2.mp3";
            playSound(soundPath);
            break;
        case 'g':
            soundPath = "../sounds/tom-3.mp3";
            playSound(soundPath);
            break;
        case 'h':
            soundPath = "../sounds/tom-4.mp3";
            playSound(soundPath);
            break;
        case 'j':
            soundPath = "../sounds/crash.mp3";
            playSound(soundPath);
            break;
        default:
            console.log(pressedKey);
            break;
    }
}

function playSound(soundPath)
{
    var audio = new Audio(soundPath);
    audio.play();
}

function buttonAnimation(pressedKey)
{
    var buttonToAnimate = document.querySelector("." + pressedKey);
    buttonToAnimate.classList.add("pressed");
    setTimeout
    (
        function() {buttonToAnimate.classList.remove("pressed")},
        100
    );
}