function barajaTarjetas(lasTarjetas) {
  let resultado;
  let totalTarjetas = lasTarjetas.concat(lasTarjetas);
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas(lasTarjetas) {
  let mesa = document.querySelector("#mesa");
  let tarjetasBarajadas = barajaTarjetas(lasTarjetas);
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function(elemento) {
    let tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta' data-valor= " +
      elemento +
      ">" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}
