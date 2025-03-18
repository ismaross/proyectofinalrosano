function escribeNiveles() {
  const menuNiveles = document.querySelector(".selecciona-nivel ul");
  menuNiveles.innerHTML = ""; // Clear existing levels
  niveles.forEach((elemento, indice) => {
    const nivel = document.createElement("li");
    nivel.innerHTML = `<button class="nivel" data-nivel="${indice}">Nivel ${indice + 1}</button>`;
    nivel.querySelector("button").addEventListener("click", cambiaNivel); // Assign click event
    menuNiveles.appendChild(nivel);
  });
}

function cambiaNivel(evento) {
  const nivelSeleccionado = parseInt(evento.target.dataset.nivel, 10);
  if (!isNaN(nivelSeleccionado)) {
    console.log("Nivel seleccionado:", nivelSeleccionado); // Debugging log
    nivelActual = nivelSeleccionado;
    guardarProgreso();
    iniciar(); // Restart the game with the selected level
  }
}

function muestraMenuNiveles(evento) {
  evento.stopPropagation();
  document.querySelector(".selecciona-nivel").classList.toggle("visible");
}

function ocultaMenuNiveles() {
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function clickFueraDeMenu(evento) {
  if (evento.target.closest(".selecciona-nivel")) {
    return;
  }
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function teclaEscCierraMenu(evento) {
  if (evento.key === "Escape") {
    ocultaMenuNiveles();
  }
}
