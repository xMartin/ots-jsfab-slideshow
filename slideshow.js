var filmroll = document.getElementById('the-film-roll');
var start = 0;
var end = 200;
var current = start;

function move() {
  filmroll.style.left = current + 'px';
  current = current + 1;
  if (current > end) {
    clearInterval(loop); // This stops the loop
  }
}

var loop = setInterval(move, 40);
