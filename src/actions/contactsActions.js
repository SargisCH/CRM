import {GET_CONTACTS, ADD_CONTACT} from '../constants';

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
                newContact
            })
        }
    )
}
