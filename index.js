import { colors } from './src/colors.js'

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  colorBody: document.body,
};

refs.start.addEventListener('click', onChangeColor);

const TIME = 1000;

function onChangeColor() {

 const intervalID = setInterval(() => {
    getRandomCollor()
 }, TIME);
  
  if (intervalID) {
    refs.start.setAttribute('disabled', true);
  };

  refs.stop.addEventListener('click',
    () => {
  clearInterval(intervalID);
  refs.start.removeAttribute('disabled');
});
};

function getRandomCollor() {
  let num = randomIntegerFromInterval(0, colors.length - 1);
  // console.log(num);
    refs.colorBody.setAttribute('style', `background-color:${colors[num]}`);
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};