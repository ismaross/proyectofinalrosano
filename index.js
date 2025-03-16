document.addEventListener("DOMContentLoaded", function() {
  fetch('data/productos.json')
    .then(response => response.json())
    .then(data => {
      const productosContainer = document.getElementById('productos');
      data.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p>Precio: $${producto.precio}</p>
          <button class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
        `;
        productosContainer.appendChild(productoDiv);
      });
    })
    .catch(error => console.error('Error al cargar los productos:', error));
});
