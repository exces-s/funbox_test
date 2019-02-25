import { createSelector } from 'reselect';
import { createOptionsArr, getLastPointCoords, getPolylineCoords } from '../lib';


const getGeoObjects = state => state.geoObjects;

export const createOptionsArrSelector = createSelector(
  getGeoObjects,
  geoObjects => createOptionsArr(geoObjects)
)


const getPoints = state => state.points;
const getPointsOrder = state => state.pointsOrder;

export const lastPointCoordsSelector = createSelector(
  getPoints,
  getPointsOrder,
  (points, pointsOrder) => getLastPointCoords(pointsOrder, points)
)

export const polylineCoordsSelector = createSelector(
  getPoints,
  getPointsOrder,
  (points, pointsOrder) => getPolylineCoords(pointsOrder, points)
)




