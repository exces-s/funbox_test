import { omit, last, isEmpty } from 'lodash';


export const createLable = (geoObject) => {
  const name = geoObject.name;
  const description = geoObject.description;

  return !!description ? `${name} (${description})` : name;
}

export const createOptionsArr = (geoObjects) => {
  if (isEmpty(geoObjects)) {
    return [];
  }
  
  const keys = Object.keys(geoObjects);
  return keys.map(id => ({ value: { id }, label: createLable(geoObjects[id]) }));
}

export const createPointObject = (geoObject) => {
  const rawPoint = omit(geoObject, ['id', 'type']);

  return { ...rawPoint, type: 'point' };
}

export const getCoordsArr = (geoObject) => {
  const stringCoords = geoObject.Point.pos;
  const [ lon, lat ] = stringCoords.split(' ');
  return [lat, lon];
}

export const getLastPointCoords = (pointsOrder, points) => {
  const lastOrderPointId = last(pointsOrder);

  if (!lastOrderPointId) {
    return undefined;
  }

  return getCoordsArr(points[lastOrderPointId]);
}

export const getPolylineCoords = (pointsOrder, points) => {
  return pointsOrder.map(id => getCoordsArr(points[id]));
}

export const getCoordsString = ([lat, lon]) => {
  return [lon, lat].join(' ');
}

export const defaultCoords = [53.26, 34.41]; // Braynsk
export const timeout = 1000; // miliseconds
export const yaMapUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=a27d9311-b8cd-4e3b-8168-caee70813258&format=json&geocode=`; // without query

// for dumb test
export const sum = (a, b) => a + b;