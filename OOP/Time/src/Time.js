// @ts-check

export default class Time {
  // BEGIN (write your solution here)

  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }

  fromString(str) {
    const hours = this.toString();
    return hours + str;
  }
}

const time = new Time(10, 15);
// console.log(`The time is ${time}`); // => 'The time is 10:15'

time.fromString('10:23');
// автоматически вызывается метод toString()
console.log(time); // 'The time is 10:23'
