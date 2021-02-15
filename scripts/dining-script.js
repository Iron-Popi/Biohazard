const painting1 = document.getElementById("painting1");
const painting2 = document.getElementById("painting2");
const painting3 = document.getElementById("painting3");
const painting4 = document.getElementById("painting4");
const dresser = document.getElementById("dresser");
const pot = document.getElementById("pot");

painting1.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "I feel like I should know this one. Is it famous?") {
        document.querySelector('.text-box span').innerHTML = "I feel like I should know this one. Is it famous?";
    } else if (document.querySelector('.text-box span').innerHTML === "I feel like I should know this one. Is it famous?") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });

painting2.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "Still life indeed, it feels like the entire house is.") {
        document.querySelector('.text-box span').innerHTML = "Still life indeed, it feels like the entire house is.";
    } else if (document.querySelector('.text-box span').innerHTML === "Still life indeed, it feels like the entire house is.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });
  
painting3.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "What even is this supposed to be? Awfull.") {
        document.querySelector('.text-box span').innerHTML = "What even is this supposed to be? Awfull.";
    } else if (document.querySelector('.text-box span').innerHTML === "What even is this supposed to be? Awfull.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });
    
painting4.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "A landscape, I can almost enjoy this one.") {
        document.querySelector('.text-box span').innerHTML = "A landscape, I can almost enjoy this one.";
    } else if (document.querySelector('.text-box span').innerHTML === "A landscape, I can almost enjoy this one.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });
      
pot.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "Empty... sad.") {
        document.querySelector('.text-box span').innerHTML = "Empty... sad.";
    } else if (document.querySelector('.text-box span').innerHTML === "Empty... sad.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });
        
dresser.addEventListener('click', () => {
    if (document.querySelector('.text-box span').innerHTML !== "Looks expensive, better not touch it.") {
        document.querySelector('.text-box span').innerHTML = "Looks expensive, better not touch it.";
    } else if (document.querySelector('.text-box span').innerHTML === "Looks expensive, better not touch it.") {
        document.querySelector('.text-box span').innerHTML = "...";
    }
  });