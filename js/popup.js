window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("popup-close");

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
