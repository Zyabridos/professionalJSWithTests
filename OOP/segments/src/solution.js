import Point from './point.js';
import Segment from './segment.js';

export default (segment) => {
  const beginPoint = segment.getBeginPoint();
  const endPoint = segment.getEndPoint();
  const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());
  const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());

  return new Segment(newBeginPoint, newEndPoint);
};
