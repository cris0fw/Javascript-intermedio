const menu = document.getElementById("menu");
const navMobile = document.querySelector(".navMobile");

let menuActived = false;

menu.addEventListener("click", (e) => {
  if (!menuActived) {
    navMobile.style.display = "block";
    menuActived = true;
  } else {
    navMobile.style.display = "none";
    menuActived = false;
  }
});
