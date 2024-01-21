let hrs = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
//create audio
let clickSound = new Audio("click.wav");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  mins.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secs.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  clickSound.play();
}, 1000);
