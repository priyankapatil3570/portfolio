function toggleSwitch() {
  let currentSource = document.querySelector("img").src;
  if (currentSource.includes("off")) {
    document.querySelector("img").src = "on bulb.png";
  } else {
    document.querySelector("img").src = "off bulb.png";
  }
}
function changeColor() {
  let currentColor = document.querySelector("h1").style.color;
  if (currentColor == "grey") {
    document.querySelector("h1").style.color = "yellow";
  } else {
    document.querySelector("h1").style.color = "grey";
  }
}
function combinedFunction() {
  changeColor();
  toggleSwitch();
}
