function gameOver() {
  clearInterval(cronometro);
  document.querySelector("#bandasonora").pause();
  document.querySelector("#gameOver").classList.add("visible");
  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.removeEventListener("click", descubrir);
  });
}

function timeOver() {
  document.querySelector("#bandasonora").pause();
  document.querySelector("#timeOver").classList.add("visible");
  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.removeEventListener("click", descubrir);
  });
}
