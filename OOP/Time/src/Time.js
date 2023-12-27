// @ts-check

export default class Time {
  static fromString(time) {
    const [hours, minutes] = time.split(':');
    return new Time(hours, minutes);
  }

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}

// const time = Time.fromString('10:23');
// // автоматически вызывается метод toString()
// console.log(`The time is ${time}`); // 'The time is 10:23'
