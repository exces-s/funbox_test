import { createAction } from 'redux-actions';
import { uniqueId } from 'lodash';

export const addPoint = createAction('POINT_ADD', pointObj => ({ ...pointObj, id: uniqueId() }));
export const removePoint = createAction('POINT_REMOVE');

export const updateInputText = createAction('INPUT_TEXT_UPDATE');