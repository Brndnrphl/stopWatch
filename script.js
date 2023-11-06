let interval;
let hour = "00";
let minute = "00";
let second = "00";
let milliSecond = "00";
let isRunning = false;
let time = document.querySelector(".time");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
time.innerHTML = `${hour}:${minute}:${second}<span class="smaller">.${milliSecond}</span>`;

start.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      milliSecond++;
      if (milliSecond == 100) {
        second++;
        milliSecond = 0;
      }
      if (second == 60) {
        minute++;
        second = 0;
      }
      if (minute == 60) {
        hour++;
        minute = 0;
      }
      if (hour == 24) {
        hour = 0;
      }
      time.innerHTML = `${String(hour).padStart(2, "0")}:${String(
        minute
      ).padStart(2, "0")}:${String(second).padStart(
        2,
        "0"
      )}<span class="smaller">.${String(milliSecond).padStart(2, "0")}</span>`;
    }, 10);
  }
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  isRunning = false;
});

reset.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
    isRunning = false;
    time.innerHTML = `00:00:00<span class="smaller">.00</span>`;
  }
});
