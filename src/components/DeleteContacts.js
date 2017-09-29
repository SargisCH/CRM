import React from 'react';
import {deleteContacts} from '../actions/contactsActions'

export default function DeleteContacts ({dispatch, contacts, guids}){
    return(
        <div className="delete">
            <button onClick={ () => dispatch(deleteContacts(contacts, guids))}>Delete</button>
        </div>
    )
}