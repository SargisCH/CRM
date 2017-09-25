import {GET_CONTACTS} from '../constants';

export default function contactsReducer (state={
    contacts: []
}, action){
    switch(action.type){
        case GET_CONTACTS: {
            return {
                ...state,
                contacts: action.contacts
            }
        }
        default: {
            return state
        }
    }
}