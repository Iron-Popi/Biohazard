// consts hall//
const doorLeft = document.getElementById("door1");
const doorRight = document.getElementById("door4");
const doorBack = document.getElementById("door3");
const doorSide = document.getElementById("door2");
const piano = document.getElementById("piano");
const shadow = document.getElementById("shadow");

// consts dining//
const doors = document.getElementById("doors");
const painting1 = document.getElementById("painting1");
const painting2 = document.getElementById("painting2");
const painting3 = document.getElementById("painting3");
const painting4 = document.getElementById("painting4");
const drawers = document.getElementById("drawers");
const desk = document.getElementById("corner-desk");
const pot = document.getElementById("pot");

// consts library//
const lights = document.getElementById("lights");
const table = document.getElementById("table");
const windows = document.getElementById("window");
const bookshelf1 = document.getElementById("bookshelf1");
const bookshelf2 = document.getElementById("bookshelf2");
const mess = document.getElementById("mess-floor");
const books = document.getElementById("books");


// consts for all//
const button = document.getElementById("back");
const zombieMan = document.getElementById("zombie-man");
const zombieWoman = document.getElementById("zombie-woman");
const zombieDog = document.getElementById("zombie-dog");
const span = document.querySelector('.text-box span');
const clue1 = document.getElementById("clue1");
const clue2 = document.getElementById("clue2");
const clue3 = document.getElementById("clue3");

// scripts for hall //
doorLeft.addEventListener('mouseover', () => {
    span.innerHTML = "It's open.";
});

doorLeft.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

doorLeft.addEventListener('click', () => {
    document.getElementById('theme_css').href = './styles/dining-style.css';
});

doorBack.addEventListener('mouseover', () => {
    span.innerHTML = "This door is locked, but I think it can be opened with a code.";
});

doorBack.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

doorBack.addEventListener('click', () => {
    let code = prompt("Code:", "_ _ _");
    if (code === "396"){
        window.location.href="./end.html";
    }
});

piano.addEventListener('mouseover', () => {
    span.innerHTML = "Ting ting, I don't know how to play music.";
});

piano.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

piano.addEventListener('click', () => {
    if (clue1.style.visibility === "hidden") {
        clue1.style.visibility = "visible";
        span.innerHTML = "I found something!";
    }
    else {
        clue1.style.visibility = "hidden";
    }
});

doorSide.addEventListener('mouseover', () => {
    span.innerHTML = "This door is open, but there is nothing usefull inside.";
});

doorSide.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

doorRight.addEventListener('mouseover', () => {
    span.innerHTML = "It's open.";
});

doorRight.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

doorRight.addEventListener('click', () => {
    document.getElementById('theme_css').href = './styles/library-style.css';
});

shadow.addEventListener('mouseover', () => {
    span.innerHTML = "Is there anyone here?";
});

shadow.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

shadow.addEventListener('click', () => {
    zombieMan.style.visibility = "visible";
    window.setTimeout(function(){
        window.location.href = "./game-over.html";
    }, 3000);
});

// scripts for dining //
doors.addEventListener('mouseover', () => {
    span.innerHTML = "Should I go back?";
});

doors.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

doors.addEventListener('click', () => {
    document.getElementById('theme_css').href = './styles/hall-style.css';
});

painting1.addEventListener('mouseover', () => {
    span.innerHTML = "I feel like I should know this one. Is it famous?";
});

painting1.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

painting2.addEventListener('mouseover', () => {
    span.innerHTML = "Still life indeed, it feels like the entire house is.";
});

painting2.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

painting3.addEventListener('mouseover', () => {
    span.innerHTML = "What even is this supposed to be? Awfull.";
});

painting3.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

painting4.addEventListener('mouseover', () => {
    span.innerHTML = "A landscape, I can almost enjoy this one.";
});

painting4.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

desk.addEventListener('mouseover', () => {
    span.innerHTML = "Some papers here.";
});

desk.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

desk.addEventListener('click', () => {
    if (clue3.style.visibility === "hidden") {
        clue3.style.visibility = "visible";
        span.innerHTML = "I found something!";
    }
    else {
        clue3.style.visibility = "hidden";
    }
});

pot.addEventListener('click', () => {
    span.innerHTML = "Empty...";
});

pot.addEventListener('mouseover', () => {
    span.innerHTML = "What's inside I wonder?";
});

pot.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

drawers.addEventListener('mouseover', () => {
    span.innerHTML = "The drawers are stuck, it won't open silently.";
});

drawers.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

drawers.addEventListener('click', () => {
    zombieWoman.style.visibility = "visible";
    window.setTimeout(function(){
        window.location.href = "./game-over.html";
    }, 3000);
});

// scripts for library //
lights.addEventListener('mouseover', () => {
    span.innerHTML = "No power... I can barely see!";
});

lights.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

table.addEventListener('mouseover', () => {
    span.innerHTML = "There is something written here!";
});

table.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

table.addEventListener('click', () => {
    if (clue2.style.visibility === "hidden") {
        clue2.style.visibility = "visible";
        span.innerHTML = "I found something!";
    }
    else {
        clue2.style.visibility = "hidden";
    }
});

bookshelf1.addEventListener('mouseover', () => {
    span.innerHTML = "Nothing written on the covers, how convenient...";
});

bookshelf1.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

bookshelf2.addEventListener('mouseover', () => {
    span.innerHTML = "There must be something here.";
});

bookshelf2.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

bookshelf2.addEventListener('click', () => {
    span.innerHTML = "Too much to read, I don't even know where to start.";
});

mess.addEventListener('mouseover', () => {
    span.innerHTML = "Carefull not to trip over this.";
});
    
mess.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

books.addEventListener('mouseover', () => {
    span.innerHTML = "Maybe here?";
});
    
books.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

books.addEventListener('click', () => {
    span.innerHTML = "Blank pages, why?!";
});

button.addEventListener('click', () => {
    document.getElementById('theme_css').href = './styles/hall-style.css';
});

windows.addEventListener('mouseover', () => {
    span.innerHTML = "I think I can hear something... Is it an animal?";
});
    
windows.addEventListener('mouseout', () => {
    span.innerHTML = "...";
});

windows.addEventListener('click', () => {
    zombieDog.style.visibility = "visible";
    window.setTimeout(function(){
        window.location.href = "./game-over.html";
    }, 3000);
});