const squareCheck = document.getElementById('square')
const toggle_buttons = () => {
  document.body.classList.toggle("square-buttons");
  localStorage.setItem("buttons", document.body.classList.contains("square-buttons") ? "square" : "round");
}
const currentButtons = localStorage.getItem("buttons");
if (currentButtons === "square") {
  document.body.classList.add("square-buttons")
  squareCheck.checked = true
}
if (currentButtons === "light") {
  document.body.classList.remove("square-buttons")
  squareCheck.checked = false
}
squareCheck.addEventListener("click", toggle_buttons)