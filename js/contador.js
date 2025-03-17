function actualizaContador() {
  let movimientosTexto;
  movimientos++;
  movimientosTexto = movimientos;

  if (movimientos > niveles[nivelActual].movimientosMax && !modoRelax) {
    gameOver();
    return;
  }

  if (movimientos < 10) {
    movimientosTexto = "0" + movimientos;
  }
  document.querySelector("#mov").innerText = movimientosTexto;
  guardarProgreso();
}

function maxContador() {
  let movimientosMaxTexto = niveles[nivelActual].movimientosMax;
  if (movimientosMaxTexto < 10) {
    movimientosMaxTexto = "0" + movimientosMaxTexto;
  }
  document.querySelector("#mov-total").innerText = movimientosMaxTexto;
}
