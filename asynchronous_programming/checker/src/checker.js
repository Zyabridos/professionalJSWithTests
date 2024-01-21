import { URL } from 'url';
import axios from 'axios';

const getBadLinks = async (url) => {
  const response = await axios.get(url);
  return response.status;
};

const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/ig;
  const results = content.matchAll(linkRx);
  return Array.from(results).map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};

const url = 'https://privet.hexlet';
const url2 = 'https://ru.hexlet.io';
const links = await getBadLinks(url);
console.log(links);
