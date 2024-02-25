import axios from 'axios';

const fn = async () => {
  // GET-запрос сайта Хекслета
  const response = await axios.get('https://ru.hexlet.io');
  console.log(response.status); // код ответа
}

fn();