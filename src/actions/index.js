import axios from 'axios';
import { createAction } from 'redux-actions';
import { uniqueId, isEmpty } from 'lodash';
import { yaMapUrl } from '../lib';
import texts from '../texts';

export const updateInputText = createAction('INPUT_TEXT_UPDATE');

export const clearGeoObjects = createAction('GEO_OBJECTS_CLEAR');

export const updatePointsOrder = createAction('POINTS_ORDER_UPDATE');

export const addPoint = createAction('POINT_ADD', ({ point }) => ({ ...point, id: uniqueId() }));
export const removePoint = createAction('POINT_REMOVE');
export const updatePointCoords = createAction('POINT_UPDATE');

export const getYaMapDataRequest = createAction('YA_MAP_DATA_GET_REQUEST');
export const getYaMapDataFailure = createAction('YA_MAP_DATA_GET_FAILURE');
export const getEmptyYaMapDataSuccess = createAction('EMPTY_YA_MAP_DATA_GET_SUCCESS');
export const getYaMapDataSuccess = createAction('YA_MAP_DATA_GET_SUCCESS', ({ geoObject }) => ({ ...geoObject, id: uniqueId(), type: 'geoObject' }));

export const getYaMapData = ({ query }) => async (dispatch) => {
  dispatch(getYaMapDataRequest());
  try {
    const responce = await axios.get(`${yaMapUrl}${query}`);
    const rawGeoObjects = responce.data.response.GeoObjectCollection.featureMember;

    if (isEmpty(rawGeoObjects)) {
      dispatch(getEmptyYaMapDataSuccess());
      return;
    }
    rawGeoObjects.map(rawGeoObject => dispatch(getYaMapDataSuccess({ geoObject: rawGeoObject.GeoObject })));
  } catch(err) {
    dispatch(getYaMapDataFailure());
    alert(texts.actions.errorAlert);
  }
};
