import {TOGGLE_ADD_CONTACTS_FORM} from '../constants'

export default function UI_Reducer(state={
    menuIsOpen: false,
    addContactFormIsOpen: false
}, action){
    switch(action.type){
        case TOGGLE_ADD_CONTACTS_FORM: {
            return{
                ...state,
                addContactFormIsOpen: action.toggle
            }
        }
        default: {
            return state
        }
    }
}