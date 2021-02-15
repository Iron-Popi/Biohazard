const lights = document.getElementById("lights");
const table = document.getElementById("table");
const windows = document.getElementById("window");
const bookshelf1 = document.getElementById("bookshelf1");
const bookshelf2 = document.getElementById("bookshelf2");
const mess = document.getElementById("mess-floor");
const books = document.getElementById("books");

lights.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "No power... I can barely see!") {
        document.querySelector('.text-box span').innerHTML = "No power... I can barely see!";
    } else if (document.querySelector('.text-box span').innerHTML === "No power... I can barely see!") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });

windows.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "You shouldn't have done that.") {
        document.querySelector('.text-box span').innerHTML = "You shouldn't have done that.";
    } else if (document.querySelector('.text-box span').innerHTML === "You shouldn't have done that.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });

table.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "There is something written here!") {
        document.querySelector('.text-box span').innerHTML = "There is something written here!";
    } else if (document.querySelector('.text-box span').innerHTML === "There is something written here!") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });

bookshelf1.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "Nothing written on the cover, how convenient...") {
        document.querySelector('.text-box span').innerHTML = "Nothing written on the cover, how convenient...";
    } else if (document.querySelector('.text-box span').innerHTML === "Nothing written on the cover, how convenient...") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });
  
bookshelf2.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "There must be something here.") {
        document.querySelector('.text-box span').innerHTML = "There must be something here.";
    } else if (document.querySelector('.text-box span').innerHTML === "There must be something here.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });
    
mess.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "Carefull not to trip on this.") {
        document.querySelector('.text-box span').innerHTML = "Carefull not to trip on this.";
    } else if (document.querySelector('.text-box span').innerHTML === "Carefull not to trip on this.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });
    
books.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "Blank pages, why?") {
        document.querySelector('.text-box span').innerHTML = "Blank pages, why?";
    } else if (document.querySelector('.text-box span').innerHTML === "Blank pages, why?") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });