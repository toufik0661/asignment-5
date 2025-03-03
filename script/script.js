
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


//task assigned decremental and button disable and alert
const taskAssigned = document.getElementById('task-assigned');
const navCounter = document.getElementById('nav-counter');
let count = parseInt(taskAssigned.innerText);
let count2 = parseInt(navCounter.innerText);

const completedButtons = document.querySelectorAll('.completed-btn');
for (const completedButton of completedButtons) {
  completedButton.addEventListener('click', function (event) {
    //get title when button is clicked
    let title = completedButton.parentNode.parentNode.childNodes[3];
    let titleText = title.innerText;


    //when button is clicked it will show alert and show history
    if (count > 0) {
      alert('Board updated successfully');
      // for disabling buttons 
      completedButton.setAttribute('disabled', 'true');

      //decease the task assigned counter
      count--;
      taskAssigned.innerText = count;

      //increase the nav counter
      count2++
      navCounter.innerText = count2;

      //push the clicked button to the side bar
      const p = document.createElement('p');
      p.innerText = `You have completed the task ${titleText} at  ${time}`;
      p.classList.add('bg-[#F4F7FF]', 'rounded-lg', 'p-2', 'mb-2', 'notification-text')
      const div = document.getElementById('history');
      div.appendChild(p);
    }
    if (count == 0) {
      alert('Congrats! you have completed all the task');
    }
  })
}

//clear history
document.getElementById('history-btn').addEventListener('click', function () {
  const notifications = document.querySelectorAll('.notification-text');
  for (const notification of notifications) {
    notification.classList.add('hidden');
  }
});







