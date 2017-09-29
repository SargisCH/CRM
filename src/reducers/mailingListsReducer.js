import {GET_MAILING_LISTS, SET_ACTIVE_MAILING_LIST, DELETE_MAILING_LIST, DELETE_MAILING_LIST_CONTACTS} from '../constants'

export default function mailingListsReducer (state={
    mailingLists:[],
    activeMailingList: [],
    activeMailingListContacts: {},
    guids: []
},action) {
    switch(action.type){
        case GET_MAILING_LISTS : {
            return {
                ...state,
                mailingLists : action.mailingLists
            }
        }
        case SET_ACTIVE_MAILING_LIST : {
            return {
                ...state,
                activeMailingList: action.activeMailingList,
                activeMailingListContacts: action.activeMailingList.Contacts
            }
        }
        case DELETE_MAILING_LIST : {
            let mailingLists = [...state.mailingLists];
            mailingLists.splice(action.index,1);
            return {
                ...state,
                mailingLists
            }
        }
        default : {
            return state
        }
    }
}