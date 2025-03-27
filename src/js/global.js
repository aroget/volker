document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector("button.main__menu-toggle");
  const navbarMenu = document.querySelector(".main__menu-wrapper");

  function clickHandler() {
    navbarMenu.classList.toggle("active");
  }

  function resizeHandler() {
    if (window.innerWidth > 1130) {
      navbarMenu.classList.remove("active");
    }
  }

  function cleanup() {
    navbarToggle.removeEventListener("click", clickHandler);
    window.removeEventListener("resize", resizeHandler);
  }

  navbarToggle.addEventListener("click", clickHandler);
  window.addEventListener("resize", resizeHandler);

  window.addEventListener("beforeunload", cleanup);
});
