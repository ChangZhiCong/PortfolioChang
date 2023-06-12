// Auto navbar scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });

  // Create a sticky navbar
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove('bx-x')
  navbar.classList.remove('active')

};

// Toggle menu
let menubar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menubar.onclick= ()=> {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//create a text changer
var type = new Typed('.textline', {
  strings: ["Web Developer", "TARcian Student"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})




