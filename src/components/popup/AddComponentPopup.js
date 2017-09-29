import React from 'react';
import {TOGGLE_ADD_CONTACTS_FORM} from '../../constants';

export default function AddComponentPopup({ addContact,dispatch }) {
    let firstname,
        lastname,
        position,
        companyName,
        country,
        email
    function submit(e){
        e.preventDefault();
        addContact(firstname, lastname, position,companyName, country, email)
    }
    return (
        <form onSubmit={submit} className="add_new_contact_form" action="" >
            <div className="add_contact_content">
                <label htmlFor="first_name">
                    <span className="add_contact_value">First name: </span> <input className="add_input" ref={(ref) => firstname = ref} id="first_name" type="text" required />
                </label><br />
                <label htmlFor="last_name">
                    <span className="add_contact_value">Last name:</span> <input className="add_input" ref={(ref) => lastname = ref} id="last_name" type="text" required />
                </label><br />
                <label htmlFor="company_name">
                    <span className="add_contact_value">Company:</span> <input className="add_input" ref={(ref) => companyName = ref} id="company_name" type="text" required />
                </label><br />
                <label htmlFor="position">
                    <span className="add_contact_value">Position:</span> <input className="add_input" ref={(ref) => position = ref} id="position" type="text" required />
                </label><br />
                <label htmlFor="country">
                    <span className="add_contact_value">Country:</span> <input className="add_input" ref={(ref) => country = ref} id="country" type="text" required />
                </label><br />
                <label htmlFor="email">
                    <span className="add_contact_value">Email:</span> <input className="add_input" ref={(ref) => email = ref} id="email" type="email" required />
                </label><br />
                <input className='btn_table add_btn' id="add_submit" type="submit" defaultValue="Add" />
                <input type="button" className="add_btn" defaultValue="Cancel" onClick={() => dispatch({ type: TOGGLE_ADD_CONTACTS_FORM, toggle: false })} id="add_cancel" />
            </div>
        </form>
    )
}