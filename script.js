function toggleMode() {
  const html = document.documentElement;
  const img = html.querySelector("#profile img");
  const footer = html.querySelector("footer");
  const lightMode = "light";

  html.classList.toggle(lightMode);

  if (html.classList.contains(lightMode)) {
    img.setAttribute("src", "./resources/logo-light.png");
    footer.innerHTML = "Feito com ❤️ por © Chaves & Borba";
  } else {
    img.setAttribute("src", "./resources/logo-dark.png");
    footer.innerHTML = "Feito com 🤍 por © Chaves & Borba";
  }
}
