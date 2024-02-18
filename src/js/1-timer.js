import flatpickr from 'flatpickr';
import iziToast from "izitoast";

const btn = document.querySelector('button');
btn.disabled = true;
// календар в інпуті+алерт з бібліотеки при виборі минулої дати
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = Date.now();
   
    if (selectedDates[0] < date) {
      iziToast.show({
        iconUrl: '../img/icon.svg',
        message: 'Please choose a date in the future',
        messageColor: '#ffffff',
        color: '#ef4040',
        close: false,
        position: 'topRight',
      });
    } else {
      btn.disabled = false;
      input.disabled = true;
      timer;
    }
    console.log(selectedDates[0]);
    
  },
  
};

const input = document.querySelector('#datetime-picker');
flatpickr(input, options);

// таймер
class Timer{
  constructor({ onTick }) {
    this.onTick = onTick;
    this.interval = null;
  };
  start() {
    const startTime = new Date(input.value).getTime();
    this.interval = setInterval(() => {
      const curentTime = Date.now();
      const delta = startTime - curentTime;
      const time = this.convertMs(delta);
      this.onTick(time);
    },1000)
  };

  convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = this.pad(Math.floor(ms / day));
  // Remaining hours
  const hours =this.pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes =this.pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

pad(value){
  return String(value).padStart(2, '0')
}
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const dataDay = document.querySelector('.value[data-days]');
const dataHour = document.querySelector('.value[data-hours]');
const dataMinute = document.querySelector('.value[data-minutes]');
const dataSecond = document.querySelector('.value[data-seconds]')

function updateTimer({ days, hours, minutes, seconds }) {
  dataDay.textContent = `${days}`;
  dataHour.textContent = `${hours}`;
  dataMinute.textContent = `${minutes}`;
  dataSecond.textContent = `${seconds}`;
}
const timer = new Timer({
  onTick: updateTimer
  })


btn.addEventListener('click', timer.start.bind(timer));
