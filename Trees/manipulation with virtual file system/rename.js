import _ from 'lodash';
import { mkfile, getMeta } from '../VisualFileSystem/src/index.js';

const file = mkfile('one', { size: 35 });

// При переименовании важно сохранить метаданные

// const newMeta = _.cloneDeep(getMeta(file));
// const newFile = mkfile('newName', newMeta);

// console.log(newFile);

// Фактически здесь создается новый файл с метаданными старого. Перед тем как создать новый файл,
// метаданные клонируются(глубоким клонированием).Почему ? Объекты передаются по ссылке,
// и если не выполнить клонирование, то в метаданных нового файла окажутся метаданные старого.
// Как только мы захотим изменить что - то, то изменив новое — сломаем старое:

// При переименовании важно сохранить метаданные

const newMeta = getMeta(file);
newMeta.size = 15;
const newFile = mkfile('newName', newMeta);

console.log(newFile);
// Бум! У file тоже поменялись метаданные
