import {GET_MAILING_LISTS, SET_ACTIVE_MAILING_LIST, DELETE_MAILING_LIST, DELETE_MAILING_LIST_CONTACTS} from '../constants'

export default function mailingListsReducer (state={
    mailingLists:[],
    activeMailingList: [],
    activeMailingListContacts: {}
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
        case DELETE_MAILING_LIST_CONTACTS : {
            let guids = [...state.guids];
            let activeMailingListContacts = [...state.activeMailingListContacts];
            for(let i in guids){
                for (let j in activeMailingListContacts) {
                    if (guids[i] === activeMailingListContacts[j].GuID) {
                        activeMailingListContacts.splice(j, 1)
                    }
                }
            }
            return{
                ...state,
                activeMailingListContacts,
                guids: action.guids
            }
        }
        default : {
            return state
        }
    }
}