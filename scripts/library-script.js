const lights = document.getElementById("lights");
const table = document.getElementById("table");
const windows = document.getElementById("window");
const bookshelf1 = document.getElementById("bookshelf1");
const bookshelf2 = document.getElementById("bookshelf2");
const mess = document.getElementById("mess-floor");
const books = document.getElementById("books");
const zombie = document.getElementById("zombie-box");

lights.addEventListener('mouseover', () => {
        document.querySelector('.text-box span').innerHTML = "No power... I can barely see!";
});

lights.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

table.addEventListener('mouseover', () => {
        document.querySelector('.text-box span').innerHTML = "There is something written here!";
});

table.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

table.addEventListener('click', () => {
    if (clue.style.visibility === "hidden") {
        clue.style.visibility = "visible";
        document.querySelector('.text-box span').innerHTML = "I found something!";
    }
    else {
        clue.style.visibility = "hidden";
    }
});

bookshelf1.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "Nothing written on the covers, how convenient...";
});

bookshelf1.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

bookshelf2.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "There must be something here.";
});

bookshelf2.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

bookshelf2.addEventListener('click', () => {
    document.querySelector('.text-box span').innerHTML = "Too much to read, I don't even know where to start.";
});

mess.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "Carefull not to trip on this.";
});
    
mess.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

books.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "Maybe here?";
});
    
books.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

books.addEventListener('click', () => {
    document.querySelector('.text-box span').innerHTML = "Blank pages, why?!";
});

windows.addEventListener('mouseover', () => {
    document.querySelector('.text-box span').innerHTML = "I think I can hear something... Is it an animal?";
});
    
windows.addEventListener('mouseout', () => {
    document.querySelector('.text-box span').innerHTML = "...";
});

windows.addEventListener('click', () => {
    zombie.style.visibility = "visible";
});