import React from 'react';
import {toggleEditContactForm, collectGuIDs} from '../actions/contactsActions'

export default function ContactsListItem ({contact, dispatch, index, contacts, guids}){
     return (
        <tr>
            <td><input type="checkbox"
                   onClick={(event) => {
                       dispatch(collectGuIDs(index, event, contacts, guids))
                   }}
            /></td>
            <td>{contact["Full Name"]}</td>
            <td>{contact["Company Name"]}</td>
            <td>{contact["Position"]}</td>
            <td>{contact["Country"]}</td>
            <td>{contact["Email"]}</td>
            <td className="edit_button" onClick={() => dispatch(toggleEditContactForm(true, index))}>Edit</td>
        </tr>
    )
}
