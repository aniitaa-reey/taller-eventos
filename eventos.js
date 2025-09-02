document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.querySelector("div");
  contenedor.addEventListener("click", function (event) {
    if (event.target === contenedor) {
      alert("Hola! Soy el Div");
    }
  });
});
