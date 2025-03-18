const titulo = document.querySelector("#titulo-juego");

// Animación al pasar el mouse por encima
titulo.addEventListener("mouseenter", () => {
  gsap.to(titulo, {
    scale: 1, // Aumenta el tamaño
    rotation: 15, // Gira ligeramente
    duration: 0.5, // Duración de la animación
    ease: "power1.out", // Efecto de suavizado
  });
});

// Animación al quitar el mouse
titulo.addEventListener("mouseleave", () => {
  gsap.to(titulo, {
    scale: 1, // Vuelve al tamaño original
    rotation: 0, // Restaura la rotación
    duration: 0.5,
    ease: "power1.out",
  });
});
