import axios from 'axios';
import { createAction } from 'redux-actions';
import { uniqueId } from 'lodash';


export const updateInputText = createAction('INPUT_TEXT_UPDATE');

export const clearGeoObjects = createAction('GEO_OBJECTS_CLEAR');

export const updatePointsOrder = createAction('POINTS_ORDER_UPDATE');

export const addPoint = createAction('POINT_ADD', ({ point }) => ({ ...point, id: uniqueId() }));
export const removePoint = createAction('POINT_REMOVE');
export const updatePointCoords = createAction('POINT_UPDATE');

export const getYaMapDataRequest = createAction('YA_MAP_DATA_GET_REQUEST');
export const getYaMapDataFailure = createAction('YA_MAP_DATA_GET_FAILURE');
export const getYaMapDataSuccess = createAction('YA_MAP_DATA_GET_SUCCESS', ({ geoObject }) => ({ ...geoObject, id: uniqueId(), type: 'geoObject' }));

export const getYaMapData = ({ query }) => async (dispatch) => {
  dispatch(getYaMapDataRequest())

  try {
    const responce = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=a27d9311-b8cd-4e3b-8168-caee70813258&format=json&geocode=${query}`);
    const rawGeoObjects = responce.data.response.GeoObjectCollection.featureMember
    rawGeoObjects.map(rawGeoObject => dispatch(getYaMapDataSuccess({ geoObject: rawGeoObject.GeoObject })))
  } catch(err) {
    dispatch(getYaMapDataSuccess());
  }
};
