

const mode = window.matchMedia("(prefers-color-scheme: dark)");

if (mode.matches) {
  document.body.classList.add("dark");
}


  const button = document.querySelector("input");

  button.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });


