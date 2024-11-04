document.getElementById("Button").addEventListener("click", changeCol);

function changeCol() {
  var red = Number(document.getElementById("redInput").value);
  var green = Number(document.getElementById("greenInput").value);
  var blue = Number(document.getElementById("blueInput").value);

  document.getElementById(
    "display"
  ).style.background = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById(
    "rgbSub"
  ).innerHTML = `rgb(${red}, ${green}, ${blue})`;
}
