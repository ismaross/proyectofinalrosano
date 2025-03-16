function gameOver() {
  clearInterval(cronometro);
  document.querySelector("#bandasonora").pause();
  document.querySelector("#gameOver").classList.add("visible");
}

function timeOver() {
  document.querySelector("#bandasonora").pause();
  document.querySelector("#timeOver").classList.add("visible");
}
