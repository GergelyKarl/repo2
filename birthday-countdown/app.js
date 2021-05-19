const timeLeft = document.getElementById("time-left");
const birthday = new Date("2022-01-21");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let timeId;
function countDown() {
  const today = new Date();
  const timeSpan = birthday - today;

  if (timeSpan <= 0) {
    timeLeft.innerHTML = "HBD";
    clearInterval(timeId);
    return;
  }

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  timeLeft.innerHTML =
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds ";
}

timeId = setInterval(countDown, second);
