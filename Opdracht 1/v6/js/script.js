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
  groen_klik.checked = true;
  for (igroen = 0; igroen < groen.length; igroen++) {
      groen[igroen].classList.add('weghalen_animatie');
  }
  for (igeel = 0; igeel < geel.length; igeel++) {
      geel[igeel].classList.add('weghalen_animatie');
  }
  for (irood = 0; irood < rood.length; irood++) {
      rood[irood].classList.add('weghalen_animatie');
  }
  for (iblauw = 0; iblauw < blauw.length; iblauw++) {
      blauw[iblauw].classList.add('weghalen_animatie');
  }
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.remove('weghalen');
        groen[igroen].classList.remove('weghalen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.add('weghalen');
        geel[igeel].classList.remove('weghalen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.add('weghalen');
        rood[irood].classList.remove('weghalen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.add('weghalen');
        blauw[iblauw].classList.remove('weghalen_animatie');
    }
  }, 200);
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.add('toevoegen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.add('toevoegen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.add('toevoegen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.add('toevoegen_animatie');
    }
  }, 200);
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.remove('toevoegen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.remove('toevoegen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.remove('toevoegen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.remove('toevoegen_animatie');
    }
  }, 400);
  alles_klik.classList.add('alles_klikbaar');
}


function geel_functie() {
  geel_klik.checked = true;
  for (igroen = 0; igroen < groen.length; igroen++) {
      groen[igroen].classList.add('weghalen_animatie');
  }
  for (igeel = 0; igeel < geel.length; igeel++) {
      geel[igeel].classList.add('weghalen_animatie');
  }
  for (irood = 0; irood < rood.length; irood++) {
      rood[irood].classList.add('weghalen_animatie');
  }
  for (iblauw = 0; iblauw < blauw.length; iblauw++) {
      blauw[iblauw].classList.add('weghalen_animatie');
  }
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.add('weghalen');
        groen[igroen].classList.remove('weghalen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.remove('weghalen');
        geel[igeel].classList.remove('weghalen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.add('weghalen');
        rood[irood].classList.remove('weghalen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.add('weghalen');
        blauw[iblauw].classList.remove('weghalen_animatie');
    }
  }, 200);
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.add('toevoegen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.add('toevoegen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.add('toevoegen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.add('toevoegen_animatie');
    }
  }, 200);
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.remove('toevoegen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.remove('toevoegen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.remove('toevoegen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.remove('toevoegen_animatie');
    }
  }, 400);
  alles_klik.classList.add('alles_klikbaar');
}

function rood_functie() {
  rood_klik.checked = true;
  for (igroen = 0; igroen < groen.length; igroen++) {
      groen[igroen].classList.add('weghalen_animatie');
  }
  for (igeel = 0; igeel < geel.length; igeel++) {
      geel[igeel].classList.add('weghalen_animatie');
  }
  for (irood = 0; irood < rood.length; irood++) {
      rood[irood].classList.add('weghalen_animatie');
  }
  for (iblauw = 0; iblauw < blauw.length; iblauw++) {
      blauw[iblauw].classList.add('weghalen_animatie');
  }
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.add('weghalen');
        groen[igroen].classList.remove('weghalen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.add('weghalen');
        geel[igeel].classList.remove('weghalen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.remove('weghalen');
        rood[irood].classList.remove('weghalen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.add('weghalen');
        blauw[iblauw].classList.remove('weghalen_animatie');
    }
  }, 200);
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.add('toevoegen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.add('toevoegen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.add('toevoegen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.add('toevoegen_animatie');
    }
  }, 200);
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.remove('toevoegen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.remove('toevoegen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.remove('toevoegen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.remove('toevoegen_animatie');
    }
  }, 400);
  alles_klik.classList.add('alles_klikbaar');
}


function blauw_functie() {
  blauw_klik.checked = true;
  for (igroen = 0; igroen < groen.length; igroen++) {
      groen[igroen].classList.add('weghalen_animatie');
  }
  for (igeel = 0; igeel < geel.length; igeel++) {
      geel[igeel].classList.add('weghalen_animatie');
  }
  for (irood = 0; irood < rood.length; irood++) {
      rood[irood].classList.add('weghalen_animatie');
  }
  for (iblauw = 0; iblauw < blauw.length; iblauw++) {
      blauw[iblauw].classList.add('weghalen_animatie');
  }
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.add('weghalen');
        groen[igroen].classList.remove('weghalen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.add('weghalen');
        geel[igeel].classList.remove('weghalen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.add('weghalen');
        rood[irood].classList.remove('weghalen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.remove('weghalen');
        blauw[iblauw].classList.remove('weghalen_animatie');
    }
  }, 200);
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.add('toevoegen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.add('toevoegen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.add('toevoegen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.add('toevoegen_animatie');
    }
  }, 200);
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.remove('toevoegen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.remove('toevoegen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.remove('toevoegen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.remove('toevoegen_animatie');
    }
  }, 400);
  alles_klik.classList.add('alles_klikbaar');
}


function alles_functie() {
  for (igroen = 0; igroen < groen.length; igroen++) {
      groen[igroen].classList.add('weghalen_animatie');
  }
  for (igeel = 0; igeel < geel.length; igeel++) {
      geel[igeel].classList.add('weghalen_animatie');
  }
  for (irood = 0; irood < rood.length; irood++) {
      rood[irood].classList.add('weghalen_animatie');
  }
  for (iblauw = 0; iblauw < blauw.length; iblauw++) {
      blauw[iblauw].classList.add('weghalen_animatie');
  }
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.remove('weghalen');
        groen[igroen].classList.remove('weghalen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.remove('weghalen');
        geel[igeel].classList.remove('weghalen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.remove('weghalen');
        rood[irood].classList.remove('weghalen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.remove('weghalen');
        blauw[iblauw].classList.remove('weghalen_animatie');
    }
  }, 200);
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.add('toevoegen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.add('toevoegen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.add('toevoegen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.add('toevoegen_animatie');
    }
  }, 200);
  setTimeout(function (){
    for (igroen = 0; igroen < groen.length; igroen++) {
        groen[igroen].classList.remove('toevoegen_animatie');
    }
    for (igeel = 0; igeel < geel.length; igeel++) {
        geel[igeel].classList.remove('toevoegen_animatie');
    }
    for (irood = 0; irood < rood.length; irood++) {
        rood[irood].classList.remove('toevoegen_animatie');
    }
    for (iblauw = 0; iblauw < blauw.length; iblauw++) {
        blauw[iblauw].classList.remove('toevoegen_animatie');
    }
  }, 400);

  alles_radio.checked = true;
  alles_klik.classList.remove('alles_klikbaar');
}


groen_klik.addEventListener('click', groen_functie);
geel_klik.addEventListener('click', geel_functie);
rood_klik.addEventListener('click', rood_functie);
blauw_klik.addEventListener('click', blauw_functie);
alles_klik.addEventListener('click', alles_functie);

window.addEventListener('keydown', function (e) {
  if (8 == e.keyCode) {
    alles_functie();
  }

  else if (71 == e.keyCode) {
    groen_functie();
  }

  else if (89 == e.keyCode) {
    geel_functie();
  }

  else if (82 == e.keyCode) {
    rood_functie();
  }

  else if (66 == e.keyCode) {
    blauw_functie();
  }
});
