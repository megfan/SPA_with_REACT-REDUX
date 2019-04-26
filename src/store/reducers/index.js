import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import { reducer } from 'redux-form';

export default combineReducers({
    items: rootReducer,
    form: reducer
});