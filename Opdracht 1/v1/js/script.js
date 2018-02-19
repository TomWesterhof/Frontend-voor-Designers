var groen_klik = document.querySelector('main>form>input#groen');
var geel_klik = document.querySelector('main>form>input#geel');
var rood_klik = document.querySelector('main>form>input#rood');
var blauw_klik = document.querySelector('main>form>input#blauw');
var alles_klik = document.querySelector('main>form>input#alles');

var rood1 = document.querySelector('main>section>img[src*="rood1"]');
var blauw1 = document.querySelector('main>section>img[src*="blauw1"]');
var geel1 = document.querySelector('main>section>img[src*="geel1"]');
var groen1 = document.querySelector('main>section>img[src*="groen1"]');
var rood2 = document.querySelector('main>section>img[src*="rood2"]');
var blauw2 = document.querySelector('main>section>img[src*="blauw2"]');
var geel2 = document.querySelector('main>section>img[src*="geel2"]');
var groen2 = document.querySelector('main>section>img[src*="groen2"]');

// var rood1 = document.querySelector('.rood');
// var blauw1 = document.querySelector('.blauw');
// var geel1 = document.querySelector('.geel');
// var groen1 = document.querySelector('.groen');

function groen_functie() {
  rood1.classList.add('weghalen');
  blauw1.classList.add('weghalen');
  geel1.classList.add('weghalen');
  groen1.classList.remove('weghalen');
  rood2.classList.add('weghalen');
  blauw2.classList.add('weghalen');
  geel2.classList.add('weghalen');
  groen2.classList.remove('weghalen');
}

function geel_functie() {
  rood1.classList.add('weghalen');
  blauw1.classList.add('weghalen');
  geel1.classList.remove('weghalen');
  groen1.classList.add('weghalen');
  rood2.classList.add('weghalen');
  blauw2.classList.add('weghalen');
  geel2.classList.remove('weghalen');
  groen2.classList.add('weghalen');
}

function rood_functie() {
  rood1.classList.remove('weghalen');
  blauw1.classList.add('weghalen');
  geel1.classList.add('weghalen');
  groen1.classList.add('weghalen');
  rood2.classList.remove('weghalen');
  blauw2.classList.add('weghalen');
  geel2.classList.add('weghalen');
  groen2.classList.add('weghalen');
}

function blauw_functie() {
  rood1.classList.add('weghalen');
  blauw1.classList.remove('weghalen');
  geel1.classList.add('weghalen');
  groen1.classList.add('weghalen');
  rood2.classList.add('weghalen');
  blauw2.classList.remove('weghalen');
  geel2.classList.add('weghalen');
  groen2.classList.add('weghalen');
}

function alles_functie() {
  rood1.classList.remove('weghalen');
  blauw1.classList.remove('weghalen');
  geel1.classList.remove('weghalen');
  groen1.classList.remove('weghalen');
  rood2.classList.remove('weghalen');
  blauw2.classList.remove('weghalen');
  geel2.classList.remove('weghalen');
  groen2.classList.remove('weghalen');
}

groen_klik.addEventListener('click', groen_functie);
geel_klik.addEventListener('click', geel_functie);
rood_klik.addEventListener('click', rood_functie);
blauw_klik.addEventListener('click', blauw_functie);
alles_klik.addEventListener('click', alles_functie);
