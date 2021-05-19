const timeLeft = document.getElementById("time-left");
const birthday = new Date("1986-01-21");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let timeId;
function countDown() {
  const today = new Date();
  const timeSpan = today - birthday;
  console.log(timeSpan);

  if (timeSpan <= 0) {
    timeLeft.innerHTML = "HBD";
    clearInterval(timeId);
    return
  }
}

timeId = setInterval(countDown, second);
