function escribeNiveles() {
  let menuNiveles = document.querySelector(".selecciona-nivel ul");
  menuNiveles.innerHTML = ''; // Clear existing levels
  niveles.forEach(function(elemento, indice) {
    let controlNivel = document.createElement("li");
    controlNivel.innerHTML =
      "<button class='nivel' data-nivel=" +
      indice +
      ">Nivel " +
      (indice + 1) +
      "</button>";
    menuNiveles.appendChild(controlNivel);
  });

  document.querySelectorAll(".nivel").forEach(function(elemento) {
    elemento.addEventListener("click", cambiaNivel);
  });
}

function cambiaNivel() {
  let nivel = parseInt(this.dataset.nivel);
  nivelActual = nivel;
  actualizaNivel();
  iniciar();
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
  console.log(evento.key);
  if (evento.key === "Escape") {
    ocultaMenuNiveles();
  }
}
