//Menu Responsive
const tombolmenu = document.querySelector(".menu");

//Ketika Menu Responsive Aktif
document.querySelector("#responsive-menu").onclick = () => {
  tombolmenu.classList.toggle("active");
};

// Klik Diluar Sidebar
const outer = document.querySelector("#responsive-menu");
document.addEventListener("click", function (e) {
  if (!outer.contains(e.target) && !tombolmenu.contains(e.target)) {
    tombolmenu.classList.remove("active");
  }
});
