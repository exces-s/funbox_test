import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';
import { omit } from 'lodash';


const points = handleActions({
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


export default combineReducers({ points, inputText });