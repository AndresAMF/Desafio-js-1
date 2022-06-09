button1.addEventListener("click", function () {
  let inputCantidad = document.querySelector("#cantidad").value;
  let inputColor = document.querySelector("#color").value;
  let inputPrecio = document.querySelector("#precio").textContent;

  if (
    inputCantidad === undefined ||
    inputCantidad === null ||
    inputCantidad === ""
  ) {
    inputCantidad = 0;
  }
 

  let total = inputCantidad * parseInt(inputPrecio);
  let color = inputColor.toString();

  let s = new Option().style;
  s.color = color;

  if ((s.color == color) == true) {
    document.querySelector("#labelTotal").textContent = "$" + total;
    document.querySelector("#labelCantidad").textContent = inputCantidad;
    document.querySelector("#labelColor").style.backgroundColor = color;
  } else {
    alert("Ingrese un color válido");
  }
});
