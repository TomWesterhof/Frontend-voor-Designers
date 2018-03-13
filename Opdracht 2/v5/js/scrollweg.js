var scrollwegboven = document.querySelector('header');
var scrollweglinks = document.querySelector('main>div:nth-of-type(2)');
var scrollwegrechts = document.querySelector('main>div:nth-of-type(3)');
var cursorwel = document.querySelector('body');

function scrollwegtimer() {
  scrollweglinks.classList.remove('scrollweglinks');
  scrollwegrechts.classList.remove('scrollwegrechts');
  scrollwegboven.classList.remove('scrollwegboven');
  cursorwel.classList.remove('cursorwel');

  setTimeout(function (){
    scrollweglinks.classList.add('scrollweglinks');
    scrollwegrechts.classList.add('scrollwegrechts');
    scrollwegboven.classList.add('scrollwegboven');
  }, 100);

  window.addEventListener('animationend', muiswegfunctie);
}

function muiswegfunctie() {
  cursorwel.classList.add('cursorwel');
}


window.addEventListener('mousemove', scrollwegtimer);
