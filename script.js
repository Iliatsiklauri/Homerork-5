const button = document.querySelector(".btn1");
const menu = document.querySelector(".menu");

let isNavIcon;
button.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("none");

  if (isNavIcon) {
    button.src = "./assets/Group 2nav-icon.svg";
  } else {
    button.src = "./assets/Group 2.svg";
  }
  isNavIcon = !isNavIcon;
});
