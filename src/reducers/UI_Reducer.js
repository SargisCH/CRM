import {TOGGLE_ADD_CONTACTS_FORM, TOGGLE_MAILING_LIST_FORM} from '../constants'

export default function UI_Reducer(state={
    menuIsOpen: false,
    addContactFormIsOpen: false,
    createMailingListFormIsOpen: false
}, action){
    switch(action.type){
        case TOGGLE_ADD_CONTACTS_FORM: {
            return{
                ...state,
                addContactFormIsOpen: action.toggle
            }
        }
        case TOGGLE_MAILING_LIST_FORM: {
            return{
                ...state,
                createMailingListFormIsOpen: action.toggle
            }
        }
        default: {
            return state
        }
    }
}