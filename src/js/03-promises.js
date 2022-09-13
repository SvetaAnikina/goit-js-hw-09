import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
  submitButton: document.querySelector('button[type=submit]'),
};

refs.submitButton.addEventListener('click', event => {
  event.preventDefault();
  let delayTime = Number(refs.delay.value);
  let stepTime = Number(refs.step.value);
  let amount = Number(refs.amount.value);
  //console.log(delayTime, stepTime, amount);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayTime += stepTime;
  }
});

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
  return promise;
}

