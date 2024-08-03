const burger = document.querySelector(".burger");
const submenu = document.querySelector("#submenu");

burger.addEventListener("click", () => {
    submenu.classList.toggle("disp")
})