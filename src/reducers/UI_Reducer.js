import {TOGGLE_ADD_CONTACTS_FORM, TOGGLE_MAILING_LIST_FORM, CREATE_MAILING_LIST} from '../constants'

export default function UI_Reducer(state={
    menuIsOpen: false,
    addContactFormIsOpen: false,
    createMailingListFormIsOpen: false,
    responseMessage: false
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
        case CREATE_MAILING_LIST:{
            return {
                ...state,
                responseMessage: action.responseMessage
            }
        }
        default: {
            return state
        }
    }
}