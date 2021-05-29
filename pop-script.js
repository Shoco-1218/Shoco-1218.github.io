const navbar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
  if(window.scrollY > 30) {
    navbar.classList.add("white-background");
  } else {
    navbar.classList.remove("white-background");
  }
})