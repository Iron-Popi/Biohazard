const doorback = document.getElementById("door3");
const piano = document.getElementById("piano");
const shadow = document.getElementById("shadow");
const doorside = document.getElementById("door2");

doorback.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "This door is locked.") {
        document.querySelector('.text-box span').innerHTML = "This door is locked.";
    } else if (document.querySelector('.text-box span').innerHTML === "This door is locked.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });

  piano.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "Ting ting, I don't know how to play music.") {
        document.querySelector('.text-box span').innerHTML = "Ting ting, I don't know how to play music.";
    } else if (document.querySelector('.text-box span').innerHTML === "Ting ting, I don't know how to play music.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });

  shadow.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "You shouldn't have done that.") {
        document.querySelector('.text-box span').innerHTML = "You shouldn't have done that.";
    } else if (document.querySelector('.text-box span').innerHTML === "You shouldn't have done that.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });

  doorside.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "This door is open, but there is nothing usefull inside.") {
        document.querySelector('.text-box span').innerHTML = "This door is open, but there is nothing usefull inside.";
    } else if (document.querySelector('.text-box span').innerHTML === "This door is open, but there is nothing usefull inside.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });

// function closedDoor() {
// }

// function pianoInteract() {
// }

// function shadowKillYou() {
// }

// function emptyDoor() {
//   }

// window.addEventListener('load', () => {
//     door.addEventListener('click', closedDoor);
//     piano.addEventListener('click', pianoInteract);
//     shadow.addEventListener('click', shadowKillYou);
//     door2.addEventListener('click', emptyDoor);
// })