// clicks for hall //
doorLeft.addEventListener('click', () => {
    document.getElementById('theme_css').href = './styles/dining-style.css';
});

doorBack.addEventListener('click', () => {
    let code = prompt("Code:", "_ _ _");
    if (code === "396"){
        window.location.href="./end.html";
    }
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

doorRight.addEventListener('click', () => {
    document.getElementById('theme_css').href = './styles/library-style.css';
});

shadow.addEventListener('click', () => {
    zombieMan.style.visibility = "visible";
    soundEffect1();
    window.setTimeout(function(){
        window.location.href = "./game-over.html";
    }, 2300);
});

// clicks for dining //
doors.addEventListener('click', () => {
    document.getElementById('theme_css').href = './styles/hall-style.css';
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

drawers.addEventListener('click', () => {
    zombieWoman.style.visibility = "visible";
    soundEffect2();
    window.setTimeout(function(){
        window.location.href = "./game-over.html";
    }, 2000);
});

// clicks for library //
table.addEventListener('click', () => {
    if (clue2.style.visibility === "hidden") {
        clue2.style.visibility = "visible";
        span.innerHTML = "I found something!";
    }
    else {
        clue2.style.visibility = "hidden";
    }
});

bookshelf2.addEventListener('click', () => {
    span.innerHTML = "Too much to read, I don't even know where to start.";
});

books.addEventListener('click', () => {
    span.innerHTML = "Blank pages, why?!";
});

button.addEventListener('click', () => {
    document.getElementById('theme_css').href = './styles/hall-style.css';
});

windows.addEventListener('click', () => {
    zombieDog.style.visibility = "visible";
    soundEffect3();
    window.setTimeout(function(){
        window.location.href = "./game-over.html";
    }, 2500);
});