import { URL } from 'url';

export default class Url {
  constructor(urlAdress) {
    this.urlAdress = urlAdress;
  }

  getScheme() {
    const ourUrl = new URL(this.urlAdress);
    return ourUrl.protocol.split(':')[0];
  }

  getHostName() {
    const ourUrl = new URL(this.urlAdress);
    return ourUrl.hostname;
  }

  getQueryParams() {
    const paramsArray = this.urlAdress.split('?')[1].split('&').map((current) => current.split('='));
    const result = {};
    for (const [key, value] of paramsArray) {
      result[key] = value;
    }
    return result;
  }

  getQueryParam(param, defaultParam = null) {
    return this.getQueryParams()[param] === undefined ? defaultParam : this.getQueryParams()[param];
  }

  equals(urlToCompare) {
    return this.urlAdress === urlToCompare.urlAdress;
  }
}

// const urL = new URL('https://example.com/?name=Jonathan%20Smith&age=18');
// console.log(urL.searchParams);

const url = new Url('http://yandex.ru:80?key=value&key2=value2');
// console.log(url.getScheme()); // 'http'
// console.log(url.getHostName()); // 'yandex.ru'
console.log(url.getQueryParams());
// {
//   key: 'value',
//   key2: 'value2',
// };
console.log(url.getQueryParam('key')); // 'value'
// // второй параметр - значение по умолчанию
console.log(url.getQueryParam('key2', 'lala')); // 'value2'
console.log(url.getQueryParam('new', 'ehu')); // 'ehu'
console.log(url.getQueryParam('new')); // null
// console.log(url.equals(new Url('http://yandex.ru:80?key=value&key2=value2'))); // true
// console.log(url.equals(new Url('http://yandex.ru:80?key=value'))); // false
