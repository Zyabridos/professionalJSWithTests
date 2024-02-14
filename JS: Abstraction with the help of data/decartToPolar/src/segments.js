// @ts-check

import { getX, getY } from './decartToPolar.js';

const makeSegment = (point1, point2) => {
  const segment = { beginPoint: point1, endPoint: point2 };
  return segment;
};

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const isParallelWithX = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  return getY(beginPoint) === getY(endPoint);
};

const isParallelWithY = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  return getX(beginPoint) === getX(endPoint);
};

export {
  makeSegment,
  isParallelWithX,
  isParallelWithY,
};
