// make(url) - Конструктор. Создает урл.
// setProtocol(data, protocol) - Сеттер. Меняет схему.
// getProtocol(data) - Селектор (геттер). Извлекает схему.
// setHost(data, host) - Сеттер. Меняет хост.
// getHost(data) - Геттер. Извлекает хост.
// setPath(data, path) - Сеттер. Меняет строку запроса.
// getPath(data) - Геттер. Извлекает строку запроса.
// setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.
// getQueryParam(data, paramName, defaultValue = null) - Геттер.
// Извлекает значение для параметра запроса.Третьим параметром функция
// принимает значение по умолчанию,которое возвращается тогда,
// когда в запросе не было такого параметра
//
// toString(data) - Геттер.Преобразует урл в строковой вид.
const make = (url) => url.toString();
const setProtocol = (url, protocol) => {

};

const url = make('https://hexlet.io/community?q=low');

console.log(url);
console.log(toString(setProtocol(url, 'http:')));
console.log(toString(url)); // 'http://hexlet.io/community?q=low'

// setPath(url, '/404');
// toString(url); // 'http://hexlet.io/404?q=low'

// setQueryParam(url, 'page', 5);
// toString(url); // 'http://hexlet.io/404?q=low&page=5'

// setQueryParam(url, 'q', 'high');
// toString(url); // 'http://hexlet.io/404?q=high&page=5'
