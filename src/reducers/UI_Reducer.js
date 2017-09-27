import {
        TOGGLE_ADD_CONTACTS_FORM, TOGGLE_MAILING_LIST_FORM, 
        CREATE_MAILING_LIST, CLOSE_RESPONSE_MESSAGE, ADD_CONTACT,
        TOGGLE_EDIT_CONTACTS_FORM, EDIT_CONTACT
    } from '../constants'

export default function UI_Reducer(state={
    menuIsOpen: false,
    addContactFormIsOpen: false,
    createMailingListFormIsOpen: false,
    responseMessage: false,
    editFormIsOpen: false
}, action){
    switch(action.type){
        case TOGGLE_ADD_CONTACTS_FORM: {
            return{
                ...state,
                addContactFormIsOpen: action.toggle
            }
        }
        case  ADD_CONTACT :{
            return{
                ...state,
                responseMessage: action.responseMessage,
                addContactFormIsOpen:false
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
        case CLOSE_RESPONSE_MESSAGE: {
            return {
                ...state,
                responseMessage: false
            }
        }
        case TOGGLE_EDIT_CONTACTS_FORM : {
            return {
                ...state,
                editFormIsOpen: action.toggle,
            }
        }
        case EDIT_CONTACT :{
            return {
                ...state,
                editFormIsOpen: false,
                responseMessage: action.responseMessage
            }
        }
        default: {
            return state
        }
    }
}