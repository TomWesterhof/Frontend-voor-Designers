var action_radio = document.querySelector('form input#action');
var adventure_radio = document.querySelector('form input#adventure');
var crime_radio = document.querySelector('form input#crime');
var drama_radio = document.querySelector('form input#drama');
var horror_radio = document.querySelector('form input#horror');
var thriller_radio = document.querySelector('form input#thriller');
var all_radio = document.querySelector('form input#all');

var filtershow_button = document.querySelector('header section div');
var filtershow = document.querySelector('form');
var namechange = document.querySelector('header section div p:nth-of-type(2)');
var iarticles;

function filtershow_functie() {
  filtershow.classList.toggle('filternoshow');
  filtershow_button.classList.toggle('arrow');
}

function action_functie() {
  action_radio.checked = true;
  var articles = document.querySelectorAll('article');
  namechange.innerHTML = 'only action';
  filtershow.classList.remove('filternoshow');
  filtershow_button.classList.remove('arrow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
      if (articles[iarticles].classList.contains('Action') ) {
        articles[iarticles].style.display = "block";
      }
      else {
        articles[iarticles].style.display = "none";
      }
  }
}

function adventure_functie() {
  adventure_radio.checked = true;
  var articles = document.querySelectorAll('article');
  namechange.innerHTML = 'only adventure';
  filtershow.classList.remove('filternoshow');
  filtershow_button.classList.remove('arrow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
      if (articles[iarticles].classList.contains('Adventure') ) {
        articles[iarticles].style.display = "block";
      }
      else {
        articles[iarticles].style.display = "none";
      }
  }
}

function crime_functie() {
  crime_radio.checked = true;
  var articles = document.querySelectorAll('article');
  namechange.innerHTML = 'only crime';
  filtershow.classList.remove('filternoshow');
  filtershow_button.classList.remove('arrow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
      if (articles[iarticles].classList.contains('Crime') ) {
        articles[iarticles].style.display = "block";
      }
      else {
        articles[iarticles].style.display = "none";
      }
  }
}

function drama_functie() {
  drama_radio.checked = true;
  var articles = document.querySelectorAll('article');
  namechange.innerHTML = 'only drama';
  filtershow.classList.remove('filternoshow');
  filtershow_button.classList.remove('arrow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
      if (articles[iarticles].classList.contains('Drama') ) {
        articles[iarticles].style.display = "block";
      }
      else {
        articles[iarticles].style.display = "none";
      }
  }
}

function horror_functie() {
  horror_radio.checked = true;
  var articles = document.querySelectorAll('article');
  namechange.innerHTML = 'only horror';
  filtershow.classList.remove('filternoshow');
  filtershow_button.classList.remove('arrow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
      if (articles[iarticles].classList.contains('Horror') ) {
        articles[iarticles].style.display = "block";
      }
      else {
        articles[iarticles].style.display = "none";
      }
  }
}

function thriller_functie() {
  thriller_radio.checked = true;
  var articles = document.querySelectorAll('article');
  namechange.innerHTML = 'only thriller';
  filtershow.classList.remove('filternoshow');
  filtershow_button.classList.remove('arrow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
      if (articles[iarticles].classList.contains('Thriller') ) {
        articles[iarticles].style.display = "block";
      }
      else {
        articles[iarticles].style.display = "none";
      }
  }
}

function all_functie() {
  all_radio.checked = true;
  var articles = document.querySelectorAll('article');
  namechange.innerHTML = 'all genres';
  filtershow.classList.remove('filternoshow');
  filtershow_button.classList.remove('arrow');

  for (iarticles = 0; iarticles < articles.length; iarticles++) {
      articles[iarticles].style.display = "block";

  }
}


action_radio.addEventListener('click', action_functie);
adventure_radio.addEventListener('click', adventure_functie);
crime_radio.addEventListener('click', crime_functie);
drama_radio.addEventListener('click', drama_functie);
horror_radio.addEventListener('click', horror_functie);
thriller_radio.addEventListener('click', thriller_functie);
all_radio.addEventListener('click', all_functie);
filtershow_button.addEventListener('click', filtershow_functie);
