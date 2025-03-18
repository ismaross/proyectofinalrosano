function iniciaCronometro() {
  let tiempoRestante = niveles[nivelActual].tiempo; // Use the time from the current level
  let segundosTexto;
  let minutosTexto;

  function actualizaContador() {
    tiempoRestante--;
    if (tiempoRestante < 0) {
      clearInterval(cronometro);
      timeOver();
      return;
    }
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    segundosTexto = segundos < 10 ? "0" + segundos : segundos;
    minutosTexto = minutos < 10 ? "0" + minutos : minutos;

    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
  }

  actualizaContador(); // Initialize the display immediately
  cronometro = setInterval(actualizaContador, 1000);
}
