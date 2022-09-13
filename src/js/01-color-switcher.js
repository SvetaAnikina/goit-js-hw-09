const refs = {
  buttonStartEl: document.querySelector('button[data-start]'),
  buttonStopEl: document.querySelector('button[data-stop]'),
};
let intervalId = null;

refs.buttonStartEl.addEventListener('click', () => {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.buttonStartEl.setAttribute('disabled', 'true');
});

refs.buttonStopEl.addEventListener('click', () => {
  clearInterval(intervalId);
  refs.buttonStartEl.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

