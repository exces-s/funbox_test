import axios from 'axios';
import { createAction } from 'redux-actions';
import { uniqueId } from 'lodash';


export const addPoint = createAction('POINT_ADD', pointObj => ({ ...pointObj, id: uniqueId() }));
export const removePoint = createAction('POINT_REMOVE');
export const updatePointsOrder = createAction('POINTS_ORDER_UPDATE');

export const updateInputText = createAction('INPUT_TEXT_UPDATE');

export const getYaMapDataRequest = createAction('YA_MAP_DATA_GET_REQUEST');
export const getYaMapDataSuccess = createAction('YA_MAP_DATA_GET_SUCCESS');
export const getYaMapDataFailure = createAction('YA_MAP_DATA_GET_FAILURE');
export const getYaMapData = ({ query }) => async (dispatch) => {
  dispatch(getYaMapDataRequest())
  
  try {
    const responce = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=a27d9311-b8cd-4e3b-8168-caee70813258&format=json&geocode=${query}`);
    const geoObjects = responce.data.response.GeoObjectCollection.featureMember
    geoObjects.map(i => dispatch(getYaMapDataSuccess({ point: i, id: uniqueId() })))
  } catch(err) {
    dispatch(getYaMapDataSuccess());
  }
};