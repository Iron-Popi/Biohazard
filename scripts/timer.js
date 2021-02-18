class Chronometer {
  constructor(currentMinute = 600, currentSecond = 60, intervalId = 0) {
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

const chronometer = new Chronometer();

let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsMin(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsSec(chronometer.getSeconds());
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
  chronometer.start(printTime);
});

function youLose() {
  window.location.href = "/html/game-over.html";
}

setTimeout(youLose, 600000);
