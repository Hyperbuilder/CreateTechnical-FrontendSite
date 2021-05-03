let counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++
  if (counter > 4) {
    counter = 1
  }
}, 5000)


$(function () {
  $(document).scroll(function () {
    var $nav = $(".navlinks");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});