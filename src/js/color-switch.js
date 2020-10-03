import colors from './color.js';

const timer = {
  intervalId: null,
  start() {
    if (this.intervalId) {
      return;
    }
    refs.startBtn.setAttribute('disabled', 'disabled');
    this.intervalId = setInterval(() => {
      return randomColor();
    }, 1000);
    refs.startBtn.removeAttribute('disabled');
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  },
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

const randomIntegerFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor() {
  const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
  colorStyle(colors[randomIndex]);
}

function colorStyle(color) {
  refs.body.setAttribute('style', `background-color:${color}`);
}

function activeBtn(disabled, enabled) {
  disabled.setAttribute('disabled', 'disabled');
  enabled.removeAtribute('disabled');
}
