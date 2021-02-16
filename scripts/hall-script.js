const doorLeft = document.getElementById("door1");
const doorRight = document.getElementById("door4");
const doorBack = document.getElementById("door3");
const doorSide = document.getElementById("door2");
const piano = document.getElementById("piano");
const clue = document.getElementById("clue");
const shadow = document.getElementById("shadow");
const zombie = document.getElementById("zombie-box");

doorLeft.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "It's open.";
});

doorLeft.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

doorBack.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "This door is locked, but I think it can be opened with a code.";
});

doorBack.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

doorBack.addEventListener('click', () => {
    let code = prompt("Code:", "_ _ _");
    if (code === "396"){
        window.location.href="/html/end.html";
    // } if (code !== "396"){
    // document.querySelector('.text-box span').innerHTML = "That's not it."; // This part doesn't work.
    }
});

piano.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "Ting ting, I don't know how to play music.";
});

piano.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

piano.addEventListener('click', () => {
    if (clue.style.visibility === "hidden") {
        clue.style.visibility = "visible";
        document.querySelector('.text-box span').innerHTML = "I found something!";
    }
    else {
        clue.style.visibility = "hidden";
    }
});

doorSide.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "This door is open, but there is nothing usefull inside.";
});

doorSide.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

doorRight.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "It's open.";
});

doorRight.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

shadow.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "Is there anyone here?";
});

shadow.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

shadow.addEventListener('click', () => {
    zombie.style.visibility = "visible";
});