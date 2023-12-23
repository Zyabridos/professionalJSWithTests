// @ts-check

export default class Time {
  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  fromString() {
    return `${this.hours}:${this.minutes}`;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}

const time = new Time(10, 15);
console.log(`The time is ${time}`); // => 'The time is 10:15'

const time2 = Time.fromString('10:23');
// автоматически вызывается метод toString()
console.log(`The time is ${time2}`); // 'The time is 10:23'
