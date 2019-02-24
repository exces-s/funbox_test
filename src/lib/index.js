import { omit, last } from 'lodash';


export const createLable = (geoObject) => {
  const name = geoObject.name;
  const description = geoObject.description;

  return !!description ? `${name} (${description})` : name;
}

export const createOptionsArr = (geoObjects) => {
  const keys = Object.keys(geoObjects);
  return keys.map(id => ({ value: { id }, label: createLable(geoObjects[id]) }))
}

export const createPointObject = (geoObject) => {
  const rawPoint = omit(geoObject, ['id', 'type'])

  return { ...rawPoint, type: 'point' }
}

export const getCoordsArr = (geoObject) => {
  const stringCoords = geoObject.Point.pos;
  const [ lon, lat ] = stringCoords.split(' ');
  return [lat, lon];
}

export const getLastPointCoords = (pointsOrder, points) => {
  const lastOrderPointId = last(pointsOrder)

  if (!lastOrderPointId) {
    return undefined
  }

  return getCoordsArr(points[lastOrderPointId])
}

export const getPolylineCoords = (pointsOrder, points) => {
  return pointsOrder.map(id => getCoordsArr(points[id]))
}