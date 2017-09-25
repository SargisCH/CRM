import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts, addContacts } from '../actions/contactsActions'
import ContactsListItem from '../components/ContactsListItem';
import AddContactButton from '../components/AddContatcButton';
import Popup from '../components/Popup';
import {TOGGLE_ADD_CONTACTS_FORM} from '../constants';


class Contacts extends Component {
    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(getContacts())
    }
    renderContacts() {
        const { contacts } = this.props;
        return contacts.map((item, index) => {
            return <ContactsListItem key={item.GuID} contact={item} />
        })
    }
    addContact(e){
        console.log('sadasdsad')
        e.preventDefault()
        if(this.firstname.value !== '' && this.lastname.value !== '' && this.companyName.value !== '' 
        && this.position.value !== '' && this.email.value !== '' ){
            let newContact = {
                FullName: this.firstname.value + " " + this.lastname.value,
                CompanyName: this.companyName.value,
                Position: this.position.value,
                Email: this.email.value,
                Country: this.country.value
            };
            this.props.dispatch(addContacts(newContact))
        }
    }
    render() {
        return (
            <div className="TableContainer">
                <table>
                    <thead>
                        <tr>
                            <td>Select</td>
                            <td>Full Name</td>
                            <td>Company </td>
                            <td>Position</td>
                            <td>Country</td>
                            <td>Email</td>
                            <td>Edit</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderContacts()}
                    </tbody>
                </table>
                <div className="buttons">
                    <AddContactButton dispatch={this.props.dispatch} />

                </div>
                {this.props.addContactFormIsOpen &&
                    <Popup addContactFormIsOpen={this.props.addContactFormIsOpen}>
                        <div className="add_new_contact_form_container block">
                            <form  onSubmit={this.addContact} className="add_new_contact_form" action="" >
                                <div className="add_contact_content">
                                    <label htmlFor="first_name">
                                        <span className="add_contact_value">First name: </span> <input className="add_input" ref={(ref) => this.firstname=ref} id="first_name" type="text" required />
                                    </label><br />
                                    <label htmlFor="last_name">
                                        <span className="add_contact_value">Last name:</span> <input className="add_input" ref={(ref) => this.lastname=ref} id="last_name" type="text" required />
                                    </label><br />
                                    <label htmlFor="company_name">
                                        <span className="add_contact_value">Company name:</span> <input className="add_input" ref={(ref) => this.companyName=ref} id="company_name" type="text" required />
                                    </label><br />
                                    <label htmlFor="position">
                                        <span className="add_contact_value">Position:</span> <input className="add_input" ref={(ref) => this.position=ref} id="position" type="text" required />
                                    </label><br />
                                    <label htmlFor="country">
                                        <span className="add_contact_value">Country:</span> <input className="add_input" ref={(ref) => this.country=ref} id="country" type="text" required />
                                    </label><br />
                                    <label htmlFor="email">
                                        <span className="add_contact_value">Email:</span> <input className="add_input" ref={(ref) => this.email=ref} id="email" type="email" required />
                                    </label><br />
                                    <input className='btn_table add_btn' id="add_submit" type="submit" defaultValue="Add" />
                                    <input type="button" className="add_btn" defaultValue="Cancel" onClick={() => this.props.dispatch({type: TOGGLE_ADD_CONTACTS_FORM, toggle: false})} id="add_cancel" />
                                </div>
                            </form>
                        </div>
                    </Popup>
                }

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        contacts: state.contactsReducer.contacts,
        addContactFormIsOpen: state.UI.addContactFormIsOpen
    }
}

export default connect(mapStateToProps)(Contacts)