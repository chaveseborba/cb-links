function toggleMode() {
  const html = document.documentElement;
  const img = html.querySelector("#profile img");
  const lightMode = "light";

  html.classList.toggle(lightMode);

  if (html.classList.contains(lightMode)) {
    img.setAttribute("src", "./resources/logo-light.png");
  } else {
    img.setAttribute("src", "./resources/logo-dark.png");
  }
}
