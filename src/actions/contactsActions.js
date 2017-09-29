import {GET_CONTACTS, ADD_CONTACT, TOGGLE_EDIT_CONTACTS_FORM, EDIT_CONTACT, COLLECT_GUIDS, DELETE_CONTACTS} from '../constants';

export const  getContacts = () => dispatch => {
    fetch("http://crmbetc.azurewebsites.net/api/contacts").then(res => res.json())
    .then(
        res => {
            dispatch( {
                type: GET_CONTACTS,
                contacts: res
            })
        }
    )
};
export const  deleteContacts = (contacts, guids) => dispatch => {
    fetch('http://crmbetc.azurewebsites.net/api/contacts', {
        method: "DELETE",
        headers: {'Accept': 'application/json', 'Content-Type': "application/json"},
        body: JSON.stringify(guids),
    }).then(response => {
        if (response.ok) {
            dispatch({
                type: DELETE_CONTACTS,
                contacts,
                guids

            })
        }
    });
};

export const collectGuIDs = (index, event, contacts, guids) => dispatch => {
    if(event.target.checked === true) {
        guids.push(contacts[index].GuID);
        dispatch({
            type: COLLECT_GUIDS,
            guids
        });

    } else {
        for(let i in guids) {
            if(contacts[index].GuID === guids[i]){
                guids.splice(i,1);
                dispatch({
                    type: COLLECT_GUIDS,
                    guids: guids
                })
            }
        }
    }
    console.log(guids);
};


export const  addContacts = (data) => dispatch => {
    console.log(data);
    fetch("http://crmbetc.azurewebsites.net/api/contacts",{
        method: "POST",
        headers: {'Accept': 'application/json','Content-Type': "application/json"},
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(
        newContact => {
            dispatch( {
                type: ADD_CONTACT,
                newContact,
                responseMessage: "New contact is added"
            });
        }
    )
};

export const toggleEditContactForm = (toggle, index) => {
    return {
        type: TOGGLE_EDIT_CONTACTS_FORM,
        toggle,
        indexOfEditObject: index
    }
};

export const  editContact = ( editContact) => dispatch => {
    fetch('http://crmbetc.azurewebsites.net/api/contacts',{
        method: "put",
        headers: {'Accept': 'application/json','Content-Type': "application/json"},
        body : JSON.stringify(editContact),
    }).then(res => res.json()).then( updatedContact => {
        dispatch( {
            type: EDIT_CONTACT,
            updatedContact,
            responseMessage: "Contact successfully updated"
        });
    })
};
