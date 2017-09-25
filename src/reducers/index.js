import {combineReducers} from 'redux'
import contactsReducer from './contacts_reducer';
import UI_Reducer from './UI_Reducer'

let rootReducer = combineReducers({contactsReducer, UI: UI_Reducer});

export default rootReducer;