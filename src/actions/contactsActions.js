import {GET_CONTACTS, ADD_CONTACT, TOGGLE_EDIT_CONTACTS_FORM, EDIT_CONTACT} from '../constants';

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
}

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
}

export const toggleEditContactForm = (toggle, index) => {
    return {
        type: TOGGLE_EDIT_CONTACTS_FORM,
        toggle,
        indexOfEditObject: index
    }
}

export const  editContact = ( editContact) => dispatch => {
    fetch('http://crmbetc.azurewebsites.net/api/contacts',{
        method: "post",
        headers: {'Accept': 'application/json','Content-Type': "application/json"},
        body : JSON.stringify(editContact),
    }).then(res => res.json()).then( updatedContact => {
        dispatch( {
            type: EDIT_CONTACT,
            updatedContact,
            responseMessage: "Contact successfully updated"
        });
    })
}
