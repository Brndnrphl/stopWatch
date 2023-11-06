let interval;
let hours = "00";
let minutes = "00";
let seconds = "00";
let milliseconds = "00";
const time = document.querySelector(".time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

time.innerHTML = `${hours}:${minutes}:${seconds}<span class="smaller">.${milliseconds}</span>`;

start.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      milliseconds++;
      if (milliseconds == 100) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds == 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes == 60) {
        hours++;
        minutes = 0;
      }
      if (hours == 24) {
        hours = 0;
      }
      time.innerHTML = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}<span class="smaller">.${String(milliseconds).padStart(2, "0")}</span>`;
    }, 10);
  }
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  time.innerHTML = `00:00:00<span class="smaller">.00</span>`;
});
