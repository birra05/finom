const closeBtn = document.querySelector("[data-target-action='close']");
const banner = document.querySelector("[data-target='banner']");

closeBtn.addEventListener("click", () => {
  banner.remove();
});
