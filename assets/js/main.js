function calcular() {
  inputCantidad = document.querySelector("#cantidad").value;
  inputColor = document.querySelector("#color").value;
  inputPrecio = document.querySelector("#precio").textContent;

  total = Number(inputCantidad) * Number(inputPrecio);
  color = String(inputColor);

  document.querySelector("#labelTotal").textContent = "$" + total;
  document.querySelector("#labelCantidad").textContent = inputCantidad;
  document.querySelector("#labelColor").style.backgroundColor = color;
}
