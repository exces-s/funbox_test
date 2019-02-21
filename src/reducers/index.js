import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';
import { omit } from 'lodash';


const points = handleActions({
  [actions.getYaMapDataSuccess](state, { payload }) {
    return { ...state, ...payload };
  },
  [actions.addPoint](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
  [actions.removePoint](state, { payload: { id } }) {
    return omit(state, id);
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

const yaMapDataRequest = handleActions({
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
  yaMapDataRequest
});