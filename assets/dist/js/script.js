let YearInp = document.querySelector(".Year");
let MonthInp = document.querySelector(".Month");
let DayInp = document.querySelector(".Day");
let HoursInp = document.querySelector(".Hours");
let MinutesInp = document.querySelector(".Minutes");
let SecondsInp = document.querySelector(".Seconds");
let btn = document.querySelector("button");

YearInp.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    MonthInp.focus();
  }
});

MonthInp.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    DayInp.focus();
  }
});

DayInp.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    HoursInp.focus();
  }
});

HoursInp.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    MinutesInp.focus();
  }
});

MinutesInp.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    SecondsInp.focus();
  }
});

SecondsInp.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    startCountDownDate();
  }
});

btn.addEventListener("click", startCountDownDate);
function startCountDownDate() {
  if (
    YearInp.value !== "" &&
    MonthInp.value !== "" &&
    DayInp.value !== "" &&
    HoursInp.value !== "" &&
    MinutesInp.value !== "" &&
    SecondsInp.value !== ""
  ) {
    let countDownDate = new Date(
      `${MonthInp.value} ${DayInp.value}, ${YearInp.value} ${HoursInp.value}:${MinutesInp.value}:${SecondsInp.value}`
    ).getTime();
    let counter = setInterval(() => {
      let dateNow = new Date().getTime();

      let dateDiff = countDownDate - dateNow;
      if (dateDiff <= 0) {
        clearInterval(counter);
        document.querySelector(".days").innerHTML = `00`;
        document.querySelector(".hours").innerHTML = `00`;
        document.querySelector(".minutes").innerHTML = `00`;
        document.querySelector(".seconds").innerHTML = `00`;
      } else {
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

        document.querySelector(".days").innerHTML =
          days < 10 ? `0${days}` : days;
        document.querySelector(".hours").innerHTML =
          hours < 10 ? `0${hours}` : hours;
        document.querySelector(".minutes").innerHTML =
          minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector(".seconds").innerHTML =
          seconds < 10 ? `0${seconds}` : seconds;
      }
    }, 1000);
  }
}
