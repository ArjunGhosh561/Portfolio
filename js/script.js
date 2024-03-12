let menu = document.querySelector("#menu-btn");

let header = document.querySelector('.header');

let themeToggler = document.querySelector("#theme-toggler");
// Typed js

var typed = new Typed(".typing-text", {
  strings: ["Data Analyst....", "Problem Solver...", "AI enthusiast...."],
  loop: true,
  typeSpeed: 150,
});

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');

}





themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
 function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
 }


// VanillaTilt.init(document.querySelectorAll('.tilt'),{
//    max:25
// })
