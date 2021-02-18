class Countdown {
  constructor(currentMinute = 300, currentSecond = 60, intervalId = 0) {
    this.currentMinute = currentMinute;
    this.currentSecond = currentSecond;

    this.intervalId = intervalId;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentMinute--;
      this.currentSecond--;
      callback();
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentMinute / 60);
  }
  getSeconds() {
    if (this.currentSecond === 0) {
      this.currentSecond = 59;
      return Math.floor(this.currentSecond % 60);
    }
  }

  twoDigitsMin(number) {
    let numberString = this.currentMinute.toString();
    if (number < 10) {
      return "0" + number;
    } else {
      return numberString;
    }
  }

  twoDigitsSec() {
    let numberString = this.currentSecond.toString();
    return numberString;
  }
}

const timer = new Countdown();

let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = timer.twoDigitsMin(timer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = timer.twoDigitsSec(timer.getSeconds());
  if (seconds < 10) {
    secDec.innerHTML = "0";
    secUni.innerHTML = seconds[0];
  } else {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
  }
}

window.addEventListener("load", () => {
  console.log("Timer starts");
  timer.start(printTime);
});

function youLose() {
  window.location.href = "./game-over.html";
}

setTimeout(youLose, 300000);
