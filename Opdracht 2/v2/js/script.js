var fotolinks = document.getElementById('linksverborgen');
var fotomidden = document.getElementById('middenzichtbaar');
var fotorechts = document.getElementById('rechtsverborgen');

var linksklik = document.querySelector('main>div:nth-of-type(2)');
var rechtsklik = document.querySelector('main>div:nth-of-type(3)');

var nummer = 1;

var bol1 = document.querySelector('main>div:nth-of-type(1)>p:nth-of-type(1)')
var bol2 = document.querySelector('main>div:nth-of-type(1)>p:nth-of-type(2)')
var bol3 = document.querySelector('main>div:nth-of-type(1)>p:nth-of-type(3)')
var bol4 = document.querySelector('main>div:nth-of-type(1)>p:nth-of-type(4)')

function rechtszichtbaar() {
  if (nummer == 1) {
    fotolinks.src='images/geel1.jpg';
    fotomidden.src='images/blauw1.jpg';
    fotorechts.src='images/groen1.jpg';
    nummer++;
    bol1.classList.remove('fotoactive');
    bol2.classList.add('fotoactive');
    bol3.classList.remove('fotoactive');
    bol4.classList.remove('fotoactive');
  }
  else if (nummer == 2) {
    fotolinks.src='images/blauw1.jpg';
    fotomidden.src='images/groen1.jpg';
    fotorechts.src='images/rood1.jpg';
    nummer++;
    bol1.classList.remove('fotoactive');
    bol2.classList.remove('fotoactive');
    bol3.classList.add('fotoactive');
    bol4.classList.remove('fotoactive');
  }
  else if (nummer == 3) {
    fotolinks.src='images/groen1.jpg';
    fotomidden.src='images/rood1.jpg';
    fotorechts.src='images/geel1.jpg';
    nummer++;
    bol1.classList.remove('fotoactive');
    bol2.classList.remove('fotoactive');
    bol3.classList.remove('fotoactive');
    bol4.classList.add('fotoactive');
  }
  else if (nummer == 4) {
    fotolinks.src='images/rood1.jpg';
    fotomidden.src='images/geel1.jpg';
    fotorechts.src='images/blauw1.jpg';
    nummer = 1;
    bol1.classList.add('fotoactive');
    bol2.classList.remove('fotoactive');
    bol3.classList.remove('fotoactive');
    bol4.classList.remove('fotoactive');
  }
}

function linkszichtbaar() {
  if (nummer == 1) {
    fotolinks.src='images/groen1.jpg';
    fotomidden.src='images/rood1.jpg';
    fotorechts.src='images/geel1.jpg';
    nummer = 4;
    bol1.classList.remove('fotoactive');
    bol2.classList.remove('fotoactive');
    bol3.classList.remove('fotoactive');
    bol4.classList.add('fotoactive');
  }
  else if (nummer == 2) {
    fotolinks.src='images/rood1.jpg';
    fotomidden.src='images/geel1.jpg';
    fotorechts.src='images/blauw1.jpg';
    nummer--;
    bol1.classList.add('fotoactive');
    bol2.classList.remove('fotoactive');
    bol3.classList.remove('fotoactive');
    bol4.classList.remove('fotoactive');
  }
  else if (nummer == 3) {
    fotolinks.src='images/geel1.jpg';
    fotomidden.src='images/blauw1.jpg';
    fotorechts.src='images/groen1.jpg';
    nummer--;
    bol1.classList.remove('fotoactive');
    bol2.classList.add('fotoactive');
    bol3.classList.remove('fotoactive');
    bol4.classList.remove('fotoactive');
  }
  else if (nummer == 4) {
    fotolinks.src='images/blauw1.jpg';
    fotomidden.src='images/groen1.jpg';
    fotorechts.src='images/rood1.jpg';
    nummer--;
    bol1.classList.remove('fotoactive');
    bol2.classList.remove('fotoactive');
    bol3.classList.add('fotoactive');
    bol4.classList.remove('fotoactive');
  }
}

linksklik.addEventListener('click', linkszichtbaar);
rechtsklik.addEventListener('click', rechtszichtbaar);

window.addEventListener('keydown', function (e) {
  if (37 == e.keyCode) {
    linkszichtbaar();
  }

  else if (39 == e.keyCode) {
    rechtszichtbaar();
  }
});
