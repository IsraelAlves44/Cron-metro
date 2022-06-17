function clock() {
  const container = document.querySelector(".container");
  const counter = container.querySelector(".counter");

  let segundos = 0;
  let timer;

  function createSeconds(seconds) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  function startClock() {
    timer = setInterval(function () {
      segundos++;
      counter.innerHTML = createSeconds(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("start")) {
      counter.classList.remove("red");
      clearInterval(timer);
      startClock();
    }

    if (el.classList.contains("pause")) {
      counter.classList.add("red");
      clearInterval(timer);
    }

    if (el.classList.contains("restart")) {
      clearInterval(timer);
      counter.innerHTML = "00:00:00";
      counter.classList.remove("red");
      segundos = 0;
      startClock();
    }
    if (el.classList.contains("stop")) {
      clearInterval(timer);
      counter.innerHTML = "00:00:00";
      counter.classList.remove("red");
      segundos = 0;
    }
  });
}

clock();
