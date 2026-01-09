let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector(".progress-text");

let count = 0;

let timer = setInterval(function () {
  if (count <= 100) {
    progress.style.width = `${count}%`;
    percentText.textContent = `${count}%`;
    count++;
  } else {
    clearInterval(timer);
  }
}, 30);
