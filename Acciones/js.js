const Menu = document.getElementById("menu_icono");
const cerrar_ven = document.getElementById("menu_ul");

Menu.addEventListener('click', () => {
    cerrar_ven.classList.toggle("ven")
})