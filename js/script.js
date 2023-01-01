 let menu = document.querySelector("#menu-btn");

let header = document.querySelector('.header');

let themeToggler = document.querySelector("#theme-toggler");
// Typed js

var typed = new Typed(".typing-text", {
  strings: ["web-designer....", "web-developer...", "front-end developer...."],
  loop: true,
  typeSpeed: 150,
});

menu.onclick = () =>{
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
// VanillaTilt.init(document.querySelectorAll('.tilt'),{
//    max:25
// })
