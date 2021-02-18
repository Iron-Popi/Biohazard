function myPlay(){
    let audio = new Audio("../sounds/ambiant.mp3");
    audio.loop=true;
    audio.volume = 0.3;
    audio.play();
}

function soundEffect1(){
    let sound = new Audio("../sounds/Zombie Growl.mp3");
    sound.play();
}

function soundEffect2(){
    let sound = new Audio("../sounds/Scream Female.mp3");
    sound.play();
}

function soundEffect3(){
    let sound = new Audio("../sounds/Zombie Dog Snarls.mp3");
    sound.play();
}

window.addEventListener("load", () => {
    myPlay();
  });