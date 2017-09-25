import {GET_CONTACTS, ADD_CONTACT} from '../constants';

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
        case ADD_CONTACT: {
            return {
                ...state,
                contacts: [...state.contacts, action.newContact]
            }
        }
        default: {
            return state
        }
    }
}