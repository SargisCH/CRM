import {combineReducers} from 'redux'
import contactsReducer from './contacts_reducer';
import UI_Reducer from './UI_Reducer';
import mailingListsReducer from '../reducers/mailingListsReducer'

let rootReducer = combineReducers({contactsReducer, UI: UI_Reducer, mailingListsReducer});

export default rootReducer;