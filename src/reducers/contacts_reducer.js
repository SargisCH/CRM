import {GET_CONTACTS, ADD_CONTACT, TOGGLE_EDIT_CONTACTS_FORM, EDIT_CONTACT, COLLECT_GUIDS, DELETE_CONTACTS} from '../constants';

export default function contactsReducer (state={
    contacts: [],
    editObject: {},
    indexOfEditObject: '',
    guids: []
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
        case COLLECT_GUIDS : {
            return{
                ...state,
                guids: action.guids
            }
        }
        case DELETE_CONTACTS : {
            let guids = [...state.guids];
            let contacts = [...state.contacts];
            for(let i in guids){
                for (let j in contacts) {
                    if (guids[i] === contacts[j].GuID) {
                        contacts.splice(j, 1)
                    }
                }
            }
            return{
                ...state,
                contacts : contacts,
                guids: action.guids
            }
        }
        default: {
            return state
        }
    }
}