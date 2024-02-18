import flatpickr from 'flatpickr';
import iziToast from "izitoast";

const btn = document.querySelector('button');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    if (selectedDates[0] < date) {
      iziToast.show({
        iconUrl: '../img/icon.svg',
        message: 'Please choose a date in the future',
        messageColor: '#ffffff',
        color: '#ef4040',
        close: false,
        position: 'topRight',
      });
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
 console.log(selectedDates[0]);
    },
};

const input = document.querySelector('#datetime-picker');
flatpickr(input, options);



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

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
