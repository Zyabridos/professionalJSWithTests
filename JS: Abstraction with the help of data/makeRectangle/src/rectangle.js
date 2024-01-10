import {
  makeDecartPoint, getX, getY, getQuadrant,
} from './points.js';

const makeRectangle = (point, width, height) => ({ point, width, height });

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

const square = (rectangle) => getWidth(rectangle) * getHeight(rectangle);

const containsOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makeDecartPoint(
    getX(point1) + getWidth(rectangle),
    getY(point1) - getHeight(rectangle),
  );

  return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
};

const p = (1, 0);

const rectangle = makeRectangle(p, 4, 5);

console.log(square(rectangle));

export {
  makeRectangle,
  containsOrigin,
  getStartPoint,
  getWidth,
  getHeight,
};
