(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    badBunnyDay = "11/22/2022";

  today = mm + "/" + dd + "/" + yyyy;

  const countDown = new Date(badBunnyDay).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      const days = Math.floor(distance / day) * -1;
      const hours = Math.floor((distance % day) / hour) * -1;
      const minutes = Math.floor((distance % hour) / minute) * -1;
      const seconds = Math.floor((distance % minute) / second) * -1;

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    }, 500);
})();
