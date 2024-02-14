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
