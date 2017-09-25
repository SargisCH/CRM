import React from 'react';

export default function ContactsListItem ({contact}){
     return (
        <tr>
            <td><input type="checkbox"/></td>
            <td>{contact["Full Name"]}</td>
            <td>{contact["Company Name"]}</td>
            <td>{contact["Position"]}</td>
            <td>{contact["Country"]}</td>
            <td>{contact["Email"]}</td>
            <td>Edit</td>
        </tr>
    )
}
