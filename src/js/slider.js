document.getElementById('home').addEventListener('click', funcHome);
document.getElementById('dot-2').addEventListener('click', funcDot_2);

document.getElementById('dot-3').addEventListener('click', funcDot_3);

var home = document.getElementById('home-block');
var dot_2 = document.getElementById('dot-2-block');
var dot_3 = document.getElementById('dot-3-block');

function funcHome() {
  home.classList.remove('slider-hidden');
  dot_2.classList.add('slider-hidden');
  dot_3.classList.add('slider-hidden');
}

function funcDot_2() {
  home.classList.add('slider-hidden');
  dot_2.classList.remove('slider-hidden');
  dot_3.classList.add('slider-hidden');
}

function funcDot_3() {
  home.classList.add('slider-hidden');
  dot_2.classList.add('slider-hidden');
  dot_3.classList.remove('slider-hidden');
}
