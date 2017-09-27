import React from 'react';
import {toggleEditContactForm} from '../../actions/contactsActions'
export default function EditContactPopup ({dispatch, editContact, editObject}) {
    let firstname,lastname,companyName,position,country,email;
    function submit(e){
        e.preventDefault();
        editContact(firstname, lastname, position,companyName, country, email, editObject.GuID)
    }
    return (
        <form onSubmit={submit} className="add_new_contact_form" action="" >
            <div className="add_contact_content">
                <label htmlFor="first_name">
                    <span className="add_contact_value">First name: </span> <input defaultValue={editObject['Full Name'].substr(0,editObject['Full Name'].indexOf(" ")+1)} className="add_input" ref={(ref) => firstname = ref} id="first_name" type="text" required />
                </label><br />
                <label htmlFor="last_name">
                    <span className="add_contact_value">Last name:</span> <input defaultValue={editObject['Full Name'].substr(editObject['Full Name'].indexOf(" ")+1)} className="add_input" ref={(ref) => lastname = ref} id="last_name" type="text" required />
                </label><br />
                <label htmlFor="company_name">
                    <span className="add_contact_value">Company name:</span> <input defaultValue={editObject['Company Name']} className="add_input" ref={(ref) => companyName = ref} id="company_name" type="text" required />
                </label><br />
                <label htmlFor="position">
                    <span className="add_contact_value">Position:</span> <input defaultValue={editObject['Position']} className="add_input" ref={(ref) => position = ref} id="position" type="text" required />
                </label><br />
                <label htmlFor="country">
                    <span className="add_contact_value">Country:</span> <input defaultValue={editObject['Country']} className="add_input" ref={(ref) => country = ref} id="country" type="text" required />
                </label><br />
                <label htmlFor="email">
                    <span className="add_contact_value">Email:</span> <input defaultValue={editObject['Email']} className="add_input" ref={(ref) => email = ref} id="email" type="email" required />
                </label><br />
                <input className='btn_table add_btn' id="add_submit" type="submit" defaultValue="Edit"  />
                <input type="button" className="add_btn" defaultValue="Cancel" onClick={() => dispatch(toggleEditContactForm(false))} id="add_cancel" />
            </div>
        </form>
    )
}

