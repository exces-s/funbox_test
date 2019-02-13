import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';


const points = handleActions({
  [actions.addPoint](state, { payload }) {
    return { ...state, [payload.id]: payload };
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