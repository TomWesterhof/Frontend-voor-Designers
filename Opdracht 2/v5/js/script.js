var fotolinks = document.querySelector('.linksverborgen');
var fotomidden = document.querySelector('.middenzichtbaar');
var fotorechts = document.querySelector('.rechtsverborgen');

var linksklik = document.querySelector('main>div:nth-of-type(2)');
var rechtsklik = document.querySelector('main>div:nth-of-type(3)');

var nummer = 1;

var bol1 = document.querySelector('main>div:nth-of-type(1)>p:nth-of-type(1)')
var bol2 = document.querySelector('main>div:nth-of-type(1)>p:nth-of-type(2)')
var bol3 = document.querySelector('main>div:nth-of-type(1)>p:nth-of-type(3)')
var bol4 = document.querySelector('main>div:nth-of-type(1)>p:nth-of-type(4)')

function rechtszichtbaar() {
  if (nummer == 1) {
    fotolinks.classList.add('animatielinks');
    fotomidden.classList.add('animatiemiddennaarlinks');
    fotorechts.classList.add('animatierechtsnaarmidden');
    setTimeout(function (){
      fotolinks.src='images/geel1.jpg';
      fotomidden.src='images/blauw1.jpg';
      fotorechts.src='images/groen1.jpg';
      fotolinks.classList.remove('animatielinks');
      fotomidden.classList.remove('animatiemiddennaarlinks');
      fotorechts.classList.remove('animatierechtsnaarmidden');
      nummer++;
      bol1.classList.remove('fotoactive');
      bol2.classList.add('fotoactive');
      bol3.classList.remove('fotoactive');
      bol4.classList.remove('fotoactive');
    }, 500);
  }
  else if (nummer == 2) {
    fotolinks.classList.add('animatielinks');
    fotomidden.classList.add('animatiemiddennaarlinks');
    fotorechts.classList.add('animatierechtsnaarmidden');
    setTimeout(function (){
      fotolinks.src='images/blauw1.jpg';
      fotomidden.src='images/groen1.jpg';
      fotorechts.src='images/rood1.jpg';
      fotolinks.classList.remove('animatielinks');
      fotomidden.classList.remove('animatiemiddennaarlinks');
      fotorechts.classList.remove('animatierechtsnaarmidden');
      nummer++;
      bol1.classList.remove('fotoactive');
      bol2.classList.remove('fotoactive');
      bol3.classList.add('fotoactive');
      bol4.classList.remove('fotoactive');
    }, 500);
  }
  else if (nummer == 3) {
    fotolinks.classList.add('animatielinks');
    fotomidden.classList.add('animatiemiddennaarlinks');
    fotorechts.classList.add('animatierechtsnaarmidden');
    setTimeout(function (){
      fotolinks.src='images/groen1.jpg';
      fotomidden.src='images/rood1.jpg';
      fotorechts.src='images/geel1.jpg';
      fotolinks.classList.remove('animatielinks');
      fotomidden.classList.remove('animatiemiddennaarlinks');
      fotorechts.classList.remove('animatierechtsnaarmidden');
      nummer++;
      bol1.classList.remove('fotoactive');
      bol2.classList.remove('fotoactive');
      bol3.classList.remove('fotoactive');
      bol4.classList.add('fotoactive');
    }, 500);
  }
  else if (nummer == 4) {
    fotolinks.classList.add('animatielinks');
    fotomidden.classList.add('animatiemiddennaarlinks');
    fotorechts.classList.add('animatierechtsnaarmidden');
    setTimeout(function (){
      fotolinks.src='images/rood1.jpg';
      fotomidden.src='images/geel1.jpg';
      fotorechts.src='images/blauw1.jpg';
      fotolinks.classList.remove('animatielinks');
      fotomidden.classList.remove('animatiemiddennaarlinks');
      fotorechts.classList.remove('animatierechtsnaarmidden');
      nummer = 1;
      bol1.classList.add('fotoactive');
      bol2.classList.remove('fotoactive');
      bol3.classList.remove('fotoactive');
      bol4.classList.remove('fotoactive');
    }, 500);
  }
}

function linkszichtbaar() {
  if (nummer == 1) {
    fotolinks.classList.add('animatielinksnaarmidden');
    fotomidden.classList.add('animatiemiddennaarrechts');
    fotorechts.classList.add('animatierechts');
    setTimeout(function (){
      fotolinks.src='images/groen1.jpg';
      fotomidden.src='images/rood1.jpg';
      fotorechts.src='images/geel1.jpg';
      fotolinks.classList.remove('animatielinksnaarmidden');
      fotomidden.classList.remove('animatiemiddennaarrechts');
      fotorechts.classList.remove('animatierechts');
      nummer = 4;
      bol1.classList.remove('fotoactive');
      bol2.classList.remove('fotoactive');
      bol3.classList.remove('fotoactive');
      bol4.classList.add('fotoactive');
    }, 500);
  }
  else if (nummer == 2) {
    fotolinks.classList.add('animatielinksnaarmidden');
    fotomidden.classList.add('animatiemiddennaarrechts');
    fotorechts.classList.add('animatierechts');
    setTimeout(function (){
      fotolinks.src='images/rood1.jpg';
      fotomidden.src='images/geel1.jpg';
      fotorechts.src='images/blauw1.jpg';
      fotolinks.classList.remove('animatielinksnaarmidden');
      fotomidden.classList.remove('animatiemiddennaarrechts');
      fotorechts.classList.remove('animatierechts');
      nummer--;
      bol1.classList.add('fotoactive');
      bol2.classList.remove('fotoactive');
      bol3.classList.remove('fotoactive');
      bol4.classList.remove('fotoactive');
    }, 500);
  }
  else if (nummer == 3) {
    fotolinks.classList.add('animatielinksnaarmidden');
    fotomidden.classList.add('animatiemiddennaarrechts');
    fotorechts.classList.add('animatierechts');
    setTimeout(function (){
      fotolinks.src='images/geel1.jpg';
      fotomidden.src='images/blauw1.jpg';
      fotorechts.src='images/groen1.jpg';
      fotolinks.classList.remove('animatielinksnaarmidden');
      fotomidden.classList.remove('animatiemiddennaarrechts');
      fotorechts.classList.remove('animatierechts');
      nummer--;
      bol1.classList.remove('fotoactive');
      bol2.classList.add('fotoactive');
      bol3.classList.remove('fotoactive');
      bol4.classList.remove('fotoactive');
    }, 500);
  }
  else if (nummer == 4) {
    fotolinks.classList.add('animatielinksnaarmidden');
    fotomidden.classList.add('animatiemiddennaarrechts');
    fotorechts.classList.add('animatierechts');
    setTimeout(function (){
      fotolinks.src='images/blauw1.jpg';
      fotomidden.src='images/groen1.jpg';
      fotorechts.src='images/rood1.jpg';
      fotolinks.classList.remove('animatielinksnaarmidden');
      fotomidden.classList.remove('animatiemiddennaarrechts');
      fotorechts.classList.remove('animatierechts');
      nummer--;
      bol1.classList.remove('fotoactive');
      bol2.classList.remove('fotoactive');
      bol3.classList.add('fotoactive');
      bol4.classList.remove('fotoactive');
    }, 500);
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
