var groen_klik = document.querySelector('main>form>input#groen');
var geel_klik = document.querySelector('main>form>input#geel');
var rood_klik = document.querySelector('main>form>input#rood');
var blauw_klik = document.querySelector('main>form>input#blauw');
var alles_klik = document.querySelector('main>form>p');
var alles_radio = document.querySelector('main>form>input#alles');

var rood = document.querySelectorAll('main>section>img[src*="rood"]');
var blauw = document.querySelectorAll('main>section>img[src*="blauw"]');
var geel = document.querySelectorAll('main>section>img[src*="geel"]');
var groen = document.querySelectorAll('main>section>img[src*="groen"]');

var irood;
var iblauw;
var igeel;
var igroen;
var ialles;


function groen_functie() {
  for (igroen = 0; igroen < groen.length; igroen++) {
      groen[igroen].classList.remove('weghalen');
  }
  for (igeel = 0; igeel < geel.length; igeel++) {
      geel[igeel].classList.add('weghalen');
  }
  for (irood = 0; irood < rood.length; irood++) {
      rood[irood].classList.add('weghalen');
  }
  for (iblauw = 0; iblauw < blauw.length; iblauw++) {
      blauw[iblauw].classList.add('weghalen');
  }
  alles_klik.classList.add('alles_klikbaar');
}


function geel_functie() {
  for (igroen = 0; igroen < groen.length; igroen++) {
      groen[igroen].classList.add('weghalen');
  }
  for (igeel = 0; igeel < geel.length; igeel++) {
      geel[igeel].classList.remove('weghalen');
  }
  for (irood = 0; irood < rood.length; irood++) {
      rood[irood].classList.add('weghalen');
  }
  for (iblauw = 0; iblauw < blauw.length; iblauw++) {
      blauw[iblauw].classList.add('weghalen');
  }
  alles_klik.classList.add('alles_klikbaar');
}

function rood_functie() {
  for (igroen = 0; igroen < groen.length; igroen++) {
      groen[igroen].classList.add('weghalen');
  }
  for (igeel = 0; igeel < geel.length; igeel++) {
      geel[igeel].classList.add('weghalen');
  }
  for (irood = 0; irood < rood.length; irood++) {
      rood[irood].classList.remove('weghalen');
  }
  for (iblauw = 0; iblauw < blauw.length; iblauw++) {
      blauw[iblauw].classList.add('weghalen');
  }
  alles_klik.classList.add('alles_klikbaar');
}


function blauw_functie() {
  for (igroen = 0; igroen < groen.length; igroen++) {
      groen[igroen].classList.add('weghalen');
  }
  for (igeel = 0; igeel < geel.length; igeel++) {
      geel[igeel].classList.add('weghalen');
  }
  for (irood = 0; irood < rood.length; irood++) {
      rood[irood].classList.add('weghalen');
  }
  for (iblauw = 0; iblauw < blauw.length; iblauw++) {
      blauw[iblauw].classList.remove('weghalen');
  }
  alles_klik.classList.add('alles_klikbaar');
}


function alles_functie() {
  for (igroen = 0; igroen < groen.length; igroen++) {
      groen[igroen].classList.remove('weghalen');
  }
  for (igeel = 0; igeel < geel.length; igeel++) {
      geel[igeel].classList.remove('weghalen');
  }
  for (irood = 0; irood < rood.length; irood++) {
      rood[irood].classList.remove('weghalen');
  }
  for (iblauw = 0; iblauw < blauw.length; iblauw++) {
      blauw[iblauw].classList.remove('weghalen');
  }

  alles_radio.checked = true;
  alles_klik.classList.remove('alles_klikbaar');
}


groen_klik.addEventListener('click', groen_functie);
geel_klik.addEventListener('click', geel_functie);
rood_klik.addEventListener('click', rood_functie);
blauw_klik.addEventListener('click', blauw_functie);
alles_klik.addEventListener('click', alles_functie);
