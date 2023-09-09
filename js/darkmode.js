const btn = document.querySelector(".btn-toggle")
const toggle_theme = () => {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
}
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-theme")
  btn.querySelector('input').checked = true
}
if (currentTheme === "light") {
  document.body.classList.remove("dark-theme")
  btn.querySelector('input').checked = false
}
btn.addEventListener("click", toggle_theme)