const doors = document.getElementById("doors");
const painting1 = document.getElementById("painting1");
const painting2 = document.getElementById("painting2");
const painting3 = document.getElementById("painting3");
const painting4 = document.getElementById("painting4");
const drawers = document.getElementById("drawers");
const desk = document.getElementById("corner-desk");
const pot = document.getElementById("pot");
const zombie = document.getElementById("zombie-box");

doors.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "Should I go back?";
});

doors.addEventListener('mouseout', () => {
document.querySelector('.text-box span').innerHTML = "...";
});

painting1.addEventListener('mouseover', () => {
        document.querySelector('.text-box span').innerHTML = "I feel like I should know this one. Is it famous?";
});

painting1.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

painting2.addEventListener('mouseover', () => {
        document.querySelector('.text-box span').innerHTML = "Still life indeed, it feels like the entire house is.";
});

painting2.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

painting3.addEventListener('mouseover', () => {
        document.querySelector('.text-box span').innerHTML = "What even is this supposed to be? Awfull.";
});

painting3.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

painting4.addEventListener('mouseover', () => {
        document.querySelector('.text-box span').innerHTML = "A landscape, I can almost enjoy this one.";
});

painting4.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

desk.addEventListener('mouseover', () => {
        document.querySelector('.text-box span').innerHTML = "Some papers here.";
});

desk.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

desk.addEventListener('click', () => {
    if (clue.style.visibility === "hidden") {
        clue.style.visibility = "visible";
        document.querySelector('.text-box span').innerHTML = "I found something!";
    }
    else {
        clue.style.visibility = "hidden";
    }
});

pot.addEventListener('click', () => {
    document.querySelector('.text-box span').innerHTML = "Empty...";
});

pot.addEventListener('mouseover', () => {
        document.querySelector('.text-box span').innerHTML = "What's inside I wonder?";
});

pot.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

drawers.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "The drawers are stuck, it won't open silently.";
});

drawers.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

drawers.addEventListener('click', () => {
    zombie.style.visibility = "visible";
});