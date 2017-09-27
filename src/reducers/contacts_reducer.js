import {GET_CONTACTS, ADD_CONTACT, TOGGLE_EDIT_CONTACTS_FORM, EDIT_CONTACT} from '../constants';

export default function contactsReducer (state={
    contacts: [],
    editObject: {},
    indexOfEditObject: ''
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
        case TOGGLE_EDIT_CONTACTS_FORM : {
            let editObject = {...state.contacts[action.indexOfEditObject]}
            return {
                ...state,
                editObject,
                indexOfEditObject: action.indexOfEditObject
            }
        }
        case EDIT_CONTACT : {
            let contacts = [...state.contacts];
            contacts[state.indexOfEditObject] = action.updatedContact;
            return{
                ...state,
                contacts
            }
        }
        default: {
            return state
        }
    }
}