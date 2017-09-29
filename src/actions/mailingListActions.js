import {
    TOGGLE_MAILING_LIST_FORM,
    CREATE_MAILING_LIST,
    MAILING_LISTS,
    GET_MAILING_LISTS,
    SET_ACTIVE_MAILING_LIST,
    DELETE_MAILING_LIST,
    DELETE_MAILING_LIST_CONTACTS
} from '../constants';

export function toggleMailingListForm(toggle) {
    return {
        type: TOGGLE_MAILING_LIST_FORM,
        toggle
    }
};
export const  deleteMailingListContacts = (activeMailingListContacts, guids) => dispatch => {
    fetch('http://crmbetc.azurewebsites.net/api/contacts', {
        method: "DELETE",
        headers: {'Accept': 'application/json', 'Content-Type': "application/json"},
        body: JSON.stringify(guids),
    }).then(response => {
        if (response.ok) {
            dispatch({
                type: DELETE_MAILING_LIST_CONTACTS,
                activeMailingListContacts,
                guids

            })
        }
    });
};
export const createMailingList = (mailingListName) => (dispatch) => {
    fetch('http://crmbetc.azurewebsites.net/api/emaillists', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            EmailListName: mailingListName.value,
            contacts: []
        }),
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(res => dispatch({
        type: CREATE_MAILING_LIST,
        responseMessage: "Mailing List has been created"
    }))
};
export const getMailingLists = () => (dispatch) => {
    fetch('http://crmbetc.azurewebsites.net/api/emaillists').then(res => res.json()).then(res =>
        dispatch({
            type: GET_MAILING_LISTS,
            mailingLists: res,
        })
    )

};

export const toggleMailingLists = (toggle) => {
    return {
        type: MAILING_LISTS,
        toggle
    }
};

export const setActiveMailingList = (id) => (dispatch) => {
    fetch(`http://crmbetc.azurewebsites.net/api/emaillists?id=${id}`).then(res => res.json()).then(res =>
        dispatch({
            type: SET_ACTIVE_MAILING_LIST,
            activeMailingList: res,
        })
    )
};

export const deleteMailingList = (id,index) => (dispatch) => {
    fetch(`http://crmbetc.azurewebsites.net/api/emaillists?id=${id}`, {
            method: "DELETE"
        }).then(res => res.ok && dispatch({
            type: DELETE_MAILING_LIST,
            index
        }))
};