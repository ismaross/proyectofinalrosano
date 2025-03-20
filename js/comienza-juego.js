async function iniciarJuego() {
  await cargarNiveles();
  escribeNiveles();
  cargarProgreso();
  document.querySelector("#bienvenida").classList.add("visible");
}

iniciarJuego();

document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar);
});

document
  .querySelector("#juego-normal")
  .addEventListener("click", iniciaJuegoNormal);
document
  .querySelector("#juego-relax")
  .addEventListener("click", iniciaJuegoRelax);

document
  .querySelector("#control-nivel")
  .addEventListener("click", muestraMenuNiveles);
document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles);

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

document.querySelector("body").addEventListener("click", clickFueraDeMenu);

document.addEventListener("keydown", teclaEscCierraMenu);

// Add event listener for the reset levels button
document.querySelector("#reset-niveles").addEventListener("click", () => {
  localStorage.clear(); // Clear all stored progress
  const bandasonora = document.querySelector("#bandasonora");
  bandasonora.pause(); // Stop the audio
  bandasonora.currentTime = 0; // Reset the audio to the beginning
  location.reload(); // Reload the page to reset the game
});
