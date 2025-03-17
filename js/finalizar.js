function finalizar() {
  clearInterval(cronometro);
  document.querySelector("#bandasonora").pause();
  document.querySelector("#bandasonora").currentTime = 0;
  if (nivelActual < niveles.length - 1) {
    document.querySelector("#subeNivel").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
  }
}
