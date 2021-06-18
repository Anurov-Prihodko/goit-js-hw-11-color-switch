import { colors } from './src/colors.js'
// console.log(colors);

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  colorBody: document.body,
};

refs.start.addEventListener('click', onChangeColor);

// console.log(refs.colorBody);

function onChangeColor() {
  let num = randomIntegerFromInterval(0, 5);
  
  const intervalID = setInterval(() => {
    refs.colorBody.setAttribute('style', `background-color:${colors[num]}`)
  }, 1000);
  
  // if (intervalID) {
  //   clearInterval(intervalID);
  // };

};




//  refs.stop.addEventListener('click', clearInterval(intervalID));



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};