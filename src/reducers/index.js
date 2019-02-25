import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';
import { omit } from 'lodash';
import { getCoordsString } from '../lib';


const points = handleActions({
  [actions.addPoint](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
  [actions.removePoint](state, { payload: { id } }) {
    return omit(state, id);
  },
  [actions.updatePointCoords](state, { payload: { id, newCoords } }) {
    const stringCoords = getCoordsString(newCoords)

    const innerPointObj = state[id].Point;
    const newInnerPointObj = { ...innerPointObj, pos: stringCoords };
    const newPoint = { ...state[id], Point: newInnerPointObj };

    return { ...state, [id]: newPoint };
  },
}, {});


const geoObjects = handleActions({
  [actions.getYaMapDataSuccess](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
  [actions.clearGeoObjects]() {
    return {};
  },
}, {});


const inputText = handleActions({
  [actions.updateInputText](state, { payload: { text } }) {
    return text;
  },
  [actions.addPoint](state) {
    return '';
  }
}, '');


const pointsOrder = handleActions({
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
  [actions.getEmptyYaMapDataSuccess]() {
    return 'successed';
  },
  [actions.getYaMapDataFailure]() {
    return 'failured';
  },
}, 'none');


export default combineReducers({
  points,
  inputText,
  pointsOrder,
  geoObjects,
  yaMapDataFetchingState,
});