import React from 'react';
import {toggleEditContactForm} from '../actions/contactsActions'

export default function ContactsListItem ({contact, dispatch, index}){
     return (
        <tr>
            <td><input type="checkbox"/></td>
            <td>{contact["Full Name"]}</td>
            <td>{contact["Company Name"]}</td>
            <td>{contact["Position"]}</td>
            <td>{contact["Country"]}</td>
            <td>{contact["Email"]}</td>
            <td className="edit_button" onClick={() => dispatch(toggleEditContactForm(true, index))}>Edit</td>
        </tr>
    )
}
