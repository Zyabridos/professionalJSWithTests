import {
  makeDecartPoint,
  getX,
  getY,
  getQuadrant,
} from './points.js';

// makeRectangle(point, width, height)(конструктор) – создает прямоугольник.
// Принимает параметры: левую - верхнюю точку, ширину и высоту.Ширина и высота – положительные числа
// Селекторы getStartPoint(rectangle), getWidth(rectangle) и getHeight(rectangle)

const makeRectangle = (point, width, height) => { };

// const getNumer = (rational) => rational.numer;
// const getDenom = (rational) => rational.denom;

const getStartPoint = (makeRectangle) => makeRectangle.p;
const getWidth = (makeRectangle) => makeRectangle.width;
const getHeight = (makeRectangle) => makeRectangle.height;

// Создание прямоугольника:
// p - левая верхняя точка
// 4 - ширина
// 5 - высота
//
// p    4
// -----------
// |         |
// |         | 5
// |         |
// -----------

const p = makeDecartPoint(0, 1);
const rectangle = makeRectangle(p, 4, 5);

// console.log(containsOrigin(rectangle)); // false
console.log(getWidth(rectangle)); // 4

// rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
// console.log(containsOrigin(rectangle2)); // true
