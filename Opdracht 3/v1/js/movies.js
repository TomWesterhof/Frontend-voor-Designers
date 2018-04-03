var header = document.querySelector('header');
var section = document.querySelector('section:nth-of-type(2)');
var footer = document.querySelector('footer');

var titledocument = document.title;
var movieslengte;

var requestURL = 'http://dennistel.nl/movies/' + titledocument;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function iets() {
  var filmElement = request.response;

  document.querySelector('section:nth-of-type(3)').style.display = "none";


    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myImg = document.createElement('img');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');
    var myPara2 = document.createElement('p');

    var myDiv = document.createElement('div');
    var myDiv2 = document.createElement('div');
    var myDiv3 = document.createElement('div');
    var myPara4 = document.createElement('p');
    // var myPara5 = document.createElement('p');
    // var myPara6 = document.createElement('p');



    myH2.textContent = filmElement.title;
    myImg.src = filmElement.cover;
    myPara3.textContent = filmElement.release_date;
    var genreList = filmElement.genres;
    for(var j = 0; j < genreList.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = genreList[j];
      myList.appendChild(listItem);
    }
    myPara2.textContent = filmElement.plot;

    // myPara5.textContent = '<';
    // myPara6.textContent = '>';
    // myPara5.classList = 'pijllinks';
    // myPara6.classList = 'pijlrechts';


    myPara4.textContent = 'Actors';

    var actorList = filmElement.actors;
    movieslengte = actorList.length;
    for(var i = 0; i < actorList.length; i++) {

      var myAside = document.createElement('aside');
        var listItemPhoto = document.createElement('img');
        listItemPhoto.src = filmElement.actors[i].url_photo;
        myAside.appendChild(listItemPhoto);

        var listItemName2 = document.createElement('p');
        listItemName2.textContent = 'NAME';
        myAside.appendChild(listItemName2);

        var listItemName = document.createElement('p');
        listItemName.textContent = filmElement.actors[i].actor_name;
        myAside.appendChild(listItemName);

        var listItemName3 = document.createElement('p');
        listItemName3.textContent = 'PLAYS';
        myAside.appendChild(listItemName3);

        var listItemCharacter = document.createElement('p');
        listItemCharacter.textContent = filmElement.actors[i].character;
        myAside.appendChild(listItemCharacter);

        myDiv3.appendChild(myAside);
        myDiv2.appendChild(myDiv3);
    }





    myArticle.appendChild(myH2);
    myArticle.appendChild(myImg);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myDiv);
    myArticle.appendChild(myDiv2);
    myDiv.appendChild(myPara4);
    // myDiv.appendChild(myPara5);
    // myDiv.appendChild(myPara6);
    myDiv.appendChild(myDiv2);


    section.appendChild(myArticle);

    document.title = 'Movie Database - ' + filmElement.title;


    var mySection = document.createElement('section');
    var myPara5 = document.createElement('p');
    var myPara6 = document.createElement('p');
    var myLink1 = document.createElement('a');
    var myLink2 = document.createElement('a');

    myPara6.textContent = 'Design: ';
    myLink2.textContent = 'Tom Westerhof';
    myLink2.href = 'http://tomwesterhof.nl';
    myPara5.textContent = 'Movie info: ';
    myLink1.textContent = requestURL;
    myLink1.href = requestURL;

    mySection.appendChild(myPara5);
    mySection.appendChild(myLink1);
    mySection.appendChild(myPara6);
    mySection.appendChild(myLink2);
    footer.appendChild(mySection);

    var pijlenlinksss = document.querySelector('p.pijllinks');
    var pijlenrechtsss = document.querySelector('p.pijlrechts');
    pijlenlinksss.classList.add('kleurweerterug');
    pijlenrechtsss.classList.add('kleurweerterug');

}
var pijllinks = document.querySelector('p.pijllinks');
var pijlrechts = document.querySelector('p.pijlrechts');
var pijlen3 = 0;


function pijllinks_functie() {
  pijlen3--;
  if (pijlen3 < 0) {
    pijlen3 = movieslengte - 1;
  }
  else {

  }
  var pijllinks2 = document.querySelector('div>div>div');
  pijllinks2.style.transform = 'translateY(-' + pijlen3*8 + 'em)';
}
function pijlrechts_functie() {
  pijlen3++;
  if (pijlen3 > movieslengte - 1) {
    pijlen3 = 0;
  }
  else {

  }
  var pijlrechts2 = document.querySelector('div>div>div');
  pijlrechts2.style.transform = 'translateY(-' + pijlen3*8 + 'em)';
}
pijllinks.addEventListener('click', pijllinks_functie);
pijlrechts.addEventListener('click', pijlrechts_functie);
