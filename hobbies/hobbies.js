function popAlert(event) {
  const color = event.target.value;
  console.log(event.target); //targets a particular action, and sends the information to the popalert. gives s
  if (event.target.name == "text-color") {
    document.querySelector(".desc").style.color = color;
  } else {
    document.querySelector(".desc").style.backgroundColor = color;
  }
}

const inputs = document.querySelectorAll("input");
// note inputs is a list of tags

inputs.forEach((input) => {
  input.addEventListener("click", (event) => {
    popAlert(event);
  });
});
