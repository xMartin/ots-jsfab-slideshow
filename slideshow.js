var filmroll = document.getElementById('the-film-roll');
var photos = [
  "1.jpg",
  "2.jpg",
  "3.jpg"
];

var html = "";
for (var i = 0; i < photos.length; i++) {
  html += "<img src=" + photos[i] + ">";
}
filmroll.innerHTML = html;

var scrolling = false;

function scroll(start, end) {
  var current = start;

  var move = function () {
    filmroll.style.left = current + 'px';

    if (current == end) {
      clearInterval(loop);
      scrolling = false;
    }

    if (end > start) {
      current = Math.min(current + 20, end);
    } else {
      current = Math.max(current - 20, end);
    }
  }

  var loop = setInterval(move, 50);
  scrolling = true;
}

function handleEvent(e) {
  if (!scrolling) {
    backAndForth(e.keyCode);
  }
}

var current = 0;

function backAndForth(keyCode) {
  if (keyCode == 37) {
    scroll(current, current - 612);
    current = current - 612;
  }

  if (keyCode == 39) {
    scroll(current, current + 612);
    current = current + 612;
  }
}

document.addEventListener('keydown', handleEvent);
