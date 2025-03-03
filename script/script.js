
//random color generate event
document.getElementById('random-color').addEventListener('click', function () {
  document.querySelector('html').style.backgroundColor = generateColor();
});

//redirect to blog page
document.getElementById('discover-something').addEventListener('click', function () {
  window.location.href = 'bloge.html';
});






