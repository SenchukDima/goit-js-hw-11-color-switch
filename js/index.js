'use strict'

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
let colorChanger = null;

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  

  start.addEventListener('click', () => {
    colorChanger = setInterval(() => {
     document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
    start.disabled = true;
  });

  stop.addEventListener('click', () => {
    clearInterval(colorChanger);
    start.disabled = false;
  });