import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';
import { omit } from 'lodash';


const points = handleActions({
  [actions.addPoint](state, { payload }) {
    console.log('addPoint', payload)
    return { ...state, [payload.id]: payload };
  },
  [actions.removePoint](state, { payload: { id } }) {
    return omit(state, id);
  },
}, {});


const geoObjects = handleActions({
  [actions.getYaMapDataSuccess](state, { payload: { geoObject } }) {
    return [...state, geoObject];
  },
  [actions.clearGeoObjects]() {
    return [];
  },
}, []);


const inputText = handleActions({
  [actions.updateInputText](state, { payload: { text } }) {
    return text;
  },
  [actions.addPoint](state) {
    return '';
  }
}, '');


const itemsOrder = handleActions({
  [actions.addPoint](state, { payload }) {
    return [...state, payload.id];
  },
  [actions.removePoint](state, { payload: { id } }) {
    return state.filter(pointId => pointId !== id);
  },
  [actions.updatePointsOrder](state, { payload: { items } }) {
    return [...items];
  },
}, []);


const yaMapDataFetchingState = handleActions({
  [actions.getYaMapDataRequest]() {
    return 'requested';
  },
  [actions.getYaMapDataSuccess]() {
    return 'successed';
  },
  [actions.getYaMapDataFailure]() {
    return 'failured';
  },
}, 'none')


export default combineReducers({
  points,
  inputText,
  itemsOrder,
  geoObjects,
  yaMapDataFetchingState,
});