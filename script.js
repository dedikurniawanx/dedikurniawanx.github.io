window.addEventListener("load", () => {
  const ty = document.querySelector("span.typed");
  const typedItem = ty.getAttribute("data-typed");
  const bgColor = document.querySelector("body#color-mode");
  const heroButton = document.querySelector("#hero-button");
  const buttonDark = document.querySelector(".btn-dark");
  const buttonLight = document.querySelector(".btn-light");
  const switchDark = document.querySelector("#switch-mode");

  new Typed(ty, {
    strings: typedItem.split(","),
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });

  switchDark.addEventListener("click", (e) => {
    if (switchDark.checked) {
      bgColor.setAttribute("data-bs-theme", "dark");
      heroButton.classList.remove("btn-outline-dark");
      heroButton.classList.add("btn-outline-light");
    } else {
      bgColor.setAttribute("data-bs-theme", "light");
      heroButton.classList.remove("btn-outline-light");
      heroButton.classList.add("btn-outline-dark");
    }
  });
  // buttonDark.addEventListener("click", function (e) {
  //   bgColor.setAttribute("data-bs-theme", "dark");
  //   heroButton.classList.remove("btn-outline-dark");
  //   heroButton.classList.add("btn-outline-light");
  // });
  // buttonLight.addEventListener("click", function (e) {
  //   bgColor.setAttribute("data-bs-theme", "light");
  //   heroButton.classList.remove("btn-outline-light");
  //   heroButton.classList.add("btn-outline-dark");
  // });
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const newColorScheme = event.matches ? "dark" : "light";
      console.log(newColorScheme);
    });
});
