// clicks for hall //
doorLeft.addEventListener('click', () => {
    document.getElementById('theme_css').href = './styles/dining-style.css';
});

doorBack.addEventListener('click', () => {
    let code = prompt("Code:", "_ _ _");
    if (code === "396"){
        window.location.href="./end.html";
    } else if (code == null || person == "") {
        span.innerHTML = "So there IS a way out.";
    }
});

piano.addEventListener('click', () => {
    if (clue1.style.visibility === "visible") {
        clue1.style.visibility = "hidden";
    }
    else {
        clue1.style.visibility = "visible";
        span.innerHTML = "I found something!";
    }
});

doorRight.addEventListener('click', () => {
    document.getElementById('theme_css').href = './styles/library-style.css';
});

shadow.addEventListener('click', () => {
    zombieMan.style.visibility = "visible";
    document.getElementById("zombie1-audio").play();
    window.setTimeout(function(){
        window.location.href = "./game-over.html";
    }, 2300);
});

// clicks for dining //
doors.addEventListener('click', () => {
    document.getElementById('theme_css').href = './styles/hall-style.css';
});

desk.addEventListener('click', () => {
    if (clue3.style.visibility === "visible") {
        clue3.style.visibility = "hidden";
    }
    else {
        clue3.style.visibility = "visible";
        span.innerHTML = "I found something!";
    }
});

pot.addEventListener('click', () => {
    span.innerHTML = "Empty...";
});

drawers.addEventListener('click', () => {
    zombieWoman.style.visibility = "visible";
    document.getElementById("zombie2-audio").play();
    window.setTimeout(function(){
    window.location.href = "./game-over.html";
    }, 2000);
});

// clicks for library //
table.addEventListener('click', () => {
    if (clue2.style.visibility === "visible") {
        clue2.style.visibility = "hidden";
    }
    else {
        clue2.style.visibility = "visible";
        span.innerHTML = "I found something!";
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
    document.getElementById("zombie3-audio").play();
    window.setTimeout(function(){
    window.location.href = "./game-over.html";
    }, 2500);
});