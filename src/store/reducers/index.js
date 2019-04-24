import { combineReducers } from 'redux'
import { rootReducer } from './rootReducer'
import { reducer as formReducer } from './redux-form'


export default combineReducers({
    items: rootReducer,
    form: formReducer
});