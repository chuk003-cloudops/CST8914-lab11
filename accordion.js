document.querySelectorAll(".accordion").forEach((button) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.classList.toggle("is-open", !expanded);
    panel.hidden = expanded;
  });
});
