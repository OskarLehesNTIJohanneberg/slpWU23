window.onscroll = function() {navFade()};

var nav = document.getElementById("main-nav")

function navFade() {
    if (window.pageYOffset > 60) {
      nav.classList.add("inverted");
    } else {
      nav.classList.remove("inverted");
    }
  }

function changeClass(e) {
  if (e.target.className.trim() === 'work-boxes') {
   e.target.className = 'work-boxes-pressed';
} else {
   e.target.className = 'work-boxes';
}
}

function reviewClass(e) {
  if (e.target.className.trim() === 'review-boxes') {
   e.target.className = 'review-boxes-pressed';
} else {
   e.target.className = 'review-boxes';
}

}
// Hämta hambuger meny elementet
document.getElementById('checkbox').addEventListener('click', ActiveClasses)

//  Hämta alla länkar från menyn och kolla om man klickar på dem, sen ändra classerna om man gör det 
document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', ActiveClasses)
})

//  Simple function som ändar alla olika linjer till olika classer 
function ActiveClasses() {
  const allElements = document.querySelectorAll('.dynamic')
  allElements.forEach(item => {
    if (item.classList.contains("menu-items")) {
      item.classList.toggle("activemenu")
    }
    if (item.classList.contains("line1")) {
      item.classList.toggle("active1")
    }
    if (item.classList.contains("line2")) {
      item.classList.toggle("active2")
    }
    if (item.classList.contains("line3")) {
      item.classList.toggle("active3")
    }
  })
}