var header = document.querySelector('header');
var section = document.querySelector('section:nth-of-type(2)');
var footer = document.querySelector('footer');
var filmNumber = 1;

var requestURL = 'http://dennistel.nl/movies';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var filmElement = request.response;

  document.querySelector('section:nth-of-type(3)').style.display = "none";

  for(var i = 0; i < filmElement.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myImg = document.createElement('img');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');
    var myPara2 = document.createElement('p');
    var myPara4 = document.createElement('a');
    var myLink5 = document.createElement('a');
    var myLink6 = document.createElement('a');

    myLink5.textContent = filmElement[i].title;
    myImg.src = filmElement[i].cover;
    myPara3.textContent = filmElement[i].release_date;
    var genreList = filmElement[i].genres;
    for(var j = 0; j < genreList.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = genreList[j];
      myList.appendChild(listItem);
    }
    myPara2.textContent = filmElement[i].simple_plot;
    myPara4.textContent = 'More info';
    myPara4.href = 'movies/movie' + filmNumber + '.html';
    myLink5.href = 'movies/movie' + filmNumber + '.html';
    myLink6.href = 'movies/movie' + filmNumber + '.html';

    myArticle.classList = filmElement[i].genres[0] + ' ' + filmElement[i].genres[1] + ' ' + filmElement[i].genres[2] + ' ' + filmElement[i].genres[3];
    myArticle.appendChild(myH2);
    myH2.appendChild(myLink5);
    myArticle.appendChild(myLink6);
    myLink6.appendChild(myImg);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara4);

    section.appendChild(myArticle);

    filmNumber++;
  }

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



}
