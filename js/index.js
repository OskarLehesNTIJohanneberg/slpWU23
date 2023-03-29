// var scrollTrigger = 60;

// window.onscroll = function() {
//   if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
//     document.getElementById("main-nav")[0].classList.add("inverted");
//   } else {
//     document.getElementById("main-nav")[0].classList.remove("inverted");
//   }
// };

window.onscroll = function() {navFade()};

var nav = document.getElementById("main-nav")

var scroll = nav.offsetTop;

function navFade() {
    if (window.pageYOffset > 60) {
      nav.classList.add("inverted");
    } else {
      nav.classList.remove("inverted");
    }
  }

