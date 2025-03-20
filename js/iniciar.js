async function iniciar() {
  await cargarNiveles();
  cargarProgreso();
  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });

  const bandasonora = document.querySelector("#bandasonora");
  bandasonora.pause(); // Stop the audio
  bandasonora.currentTime = 0; // Reset the audio to the beginning
  bandasonora.play(); // Play the audio again

  if (!modoRelax) {
    iniciaCronometro();
    document.querySelector("#contador-movimientos").classList.remove("oculto");
  } else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
    document.querySelector("#contador-movimientos").classList.add("oculto");
  }
}

function reiniciar() {
  nivelActual = 0;
  guardarProgreso();
  actualizaNivel();
  iniciar();
}

function iniciaJuegoNormal() {
  modoRelax = false; // Deactivate Relax mode
  document.querySelector("#contador-movimientos").classList.remove("oculto"); // Show movement counter
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar(); // Restart the game
  document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciaJuegoRelax() {
  modoRelax = true; // Activate Relax mode
  document.querySelector("#contador-movimientos").classList.add("oculto"); // Hide movement counter
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar(); // Restart the game
}
