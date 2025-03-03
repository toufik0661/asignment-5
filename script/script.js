
//random color generate event
document.getElementById('random-color').addEventListener('click', function () {
  document.querySelector('html').style.backgroundColor = generateColor();
});

//redirect to blog page
document.getElementById('discover-something').addEventListener('click', function () {
  window.location.href = 'bloge.html';
});

//date and time 12 hour format
const date = new Date();
const time = date.toLocaleString('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const day = date.toLocaleDateString('en-GB', { day: '2-digit' })
const dayName = date.toLocaleString('en-GB', { weekday: 'short' });
const month = date.toLocaleString('en-GB', { month: 'long' });
const year = date.getFullYear();
document.getElementById('dayName').innerHTML = `
${dayName},
`;
document.getElementById('dayName-and-date').innerHTML =
`${month}, ${day}, ${year}`;








