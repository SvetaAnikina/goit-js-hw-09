import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let selectedDate = null;
let currentDate = Date.now();

const dateInput = document.querySelector("#datetime-picker");
const startButtonEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
startButtonEl.setAttribute('disabled', 'true');
startButtonEl.addEventListener('click', () => {
  setInterval(() => {
    let instantDate = Date.now();
    let remainingTime = convertMs(selectedDate - instantDate);
    daysEl.textContent = addLeadingZero(remainingTime.days);
    hoursEl.textContent = addLeadingZero(remainingTime.hours);
    minutesEl.textContent = addLeadingZero(remainingTime.minutes);
      secondsEl.textContent = addLeadingZero(remainingTime.seconds);
      startButtonEl.setAttribute('disabled', 'true');
    dateInput.setAttribute("disabled", "true");
  }, 1000);
    

});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDates[0] < currentDate) {
      Notify.failure('Please choose a date in the future');
      startButtonEl.setAttribute('disabled', 'true');
      return;
    }
    startButtonEl.removeAttribute('disabled');
  },
};
flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  //console.log({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
