import * as lib from '../lib';
import * as fixtures from './__fixtures__';


it('Dumb test', () => {
  expect(lib.sum(1, 2)).toBe(3);
});

it('Should create label without description', () => {
  expect(lib.createLable(fixtures.geoObject_USA)).toBe('Соединённые Штаты Америки');
});

it('Should create label with description', () => {
  expect(lib.createLable(fixtures.geoObject_BRN)).toBe('Брянск (Россия)');
});

it('Should create array with one option for Form', () => {
  const actual = lib.createOptionsArr(fixtures.geoObjects1);

  expect(actual).toEqual(fixtures.optionsArr1);
});

it('Should create array with two options for Form', () => {
  const actual = lib.createOptionsArr(fixtures.geoObjects2)

  expect(actual).toEqual(fixtures.optionsArr2);
});

it('Should create raw pointObject', () => {
  const actual = lib.createRawPointObject(fixtures.geoObject_USA);

  expect(actual).toEqual(fixtures.point_lib_USA);
});

it('Should create coordsArr from geoObject', () => {
  const actual = lib.getCoordsArr(fixtures.geoObject_USA);
  const lat = '36.952915';
  const lon = '-99.115868';

  expect(actual).toEqual([lat, lon]);
});

it('Should create coordsArr from last point in order', () => {
  const actual = lib.getLastPointCoords(fixtures.pointsOrder3, fixtures.points3);
  const lat = '36.952915';
  const lon = '-99.115868';

  expect(actual).toEqual([lat, lon]);
});

it('Should return "null" for coordsArr if pointsOrder is empty', () => {
  const actual = lib.getLastPointCoords([], fixtures.points3);

  expect(actual).toEqual(null);
});

it('Should create array of coords for polyline', () => {
  const actual = lib.getPolylineCoords(fixtures.pointsOrder3, fixtures.points3);

  expect(actual).toEqual(fixtures.polylineCoords_pointsOrder3);
});

it('Should create string width coords from coordsArr', () => {
  const lat = '36.952915';
  const lon = '-99.115868';
  const actual = lib.getCoordsString([lat, lon]);

  expect(actual).toEqual('-99.115868 36.952915');
});
