import { colors } from './src/colors.js'
// console.log(colors);

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  colorBody: document.body,
};

refs.start.addEventListener('click', onChangeColor);
refs.stop.addEventListener('click', stopChangeColor);
// console.log(refs.colorBody);

function onChangeColor() {
  // let numID = intervalID;
 const intervalID = setInterval(() => {
    getRandomCollor()
  }, 1000);
  if (intervalID) {
    refs.start.setAttribute('disabled', true);
  };
  // return numID;
};

function getRandomCollor() {
    let num = randomIntegerFromInterval(0, 5);
    refs.colorBody.setAttribute('style', `background-color:${colors[num]}`);
};

// console.log(numID);
  
function stopChangeColor() {
  clearInterval(intervalID);
  refs.start.removeAttribute('disabled');
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};