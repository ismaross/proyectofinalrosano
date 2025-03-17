let modoRelax = false;
let movimientos = 0;
let cronometro;
let grupoTarjetas = [
  ["🦄", "🍦"],
  ["🌈", "👽"],
  ["👾", "🤖", "👹", "👺"],
  ["🤡", "💩", "🎃", "🙀"],
  ["☠️", "👾", "😽", "😼"]
];
let nivelActual = 0;
let niveles = [];

async function cargarNiveles() {
  const response = await fetch('data/niveles.json');
  niveles = await response.json();
}

function guardarProgreso() {
  localStorage.setItem('nivelActual', nivelActual);
  localStorage.setItem('movimientos', movimientos);
}

function cargarProgreso() {
  nivelActual = parseInt(localStorage.getItem('nivelActual')) || 0;
  movimientos = parseInt(localStorage.getItem('movimientos')) || 0;
}
