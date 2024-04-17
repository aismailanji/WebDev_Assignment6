//document.querySelectorAll("button").addEventListener("click", handleClick)


// let btns=document.querySelectorAll("button");
// for (let btn of btns)
//     btn.addEventListener("click", handleClick)



// function handleClick()
// {
//         alert("I got clicked!")
// }

let images = [
    "images/crash.png", 
    "images/kick.png", 
    "images/snare.png", 
    "images/tom1.png", 
    "images/tom2.png", 
    "images/tom3.png", 
    "images/tom4.png"
];

keys = ["w", "a", "s", "d", "j", "k", "l"];

let btns=document.querySelectorAll("button");
document.addEventListener("DOMContentLoaded", function () {
    clickInput();
    keyboardInput();
});

for (let i = 0; i < btns.length; i++) {
    let imge = document.createElement("img");
    imge.src = images[i];
    imge.style.height = "100px";
    imge.style.width = "100px";
    btns[i].innerHTML = "";
    btns[i].appendChild(imge);
}

function clickInput() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            let key = keys[i];
            addNoise(key);
        });
    }
}

function addNoise(key)
{
    if (key == "w") {
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
    }
    if (key == "a") {
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
    }
    if (key == "s") {
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
    }
    if (key == "d") {
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
    }
    if (key == "j") {
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
    }
    if (key == "k") {
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
    }
    if (key == "l") {
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
    }


/*
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/class_8_DOM_Drum Kit Starting Files_sounds_crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log(key);
    }
*/
}

function keyboardInput() {
    document.addEventListener("keydown", function(event) {
        let pressed = event.key;
        let index = keys.indexOf(pressed);
        addNoise(keys[index]);
    });
}