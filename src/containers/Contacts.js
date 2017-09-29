import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts, addContacts, editContact, collectGuIDs } from '../actions/contactsActions'
import ContactsListItem from '../components/ContactsListItem';
import Popup from './../components/popup/Popup';
import AddComponentPopup from '../components/popup/AddComponentPopup';
import EditContactPopup from '../components/popup/EditContactPopup';
import AddContactButton from '../components/AddContatcButton';
import CreateMailingListButton from '../components/CreateMailingListButton';
import DeleteContacts from '../components/DeleteContacts'
class Contacts extends Component {
    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);
        this.editContact = this.editContact.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(getContacts())
    }
    renderContacts() {
        const { contacts } = this.props;
        return contacts.map((item, index) => {
            return <ContactsListItem key={item.GuID} dispatch={this.props.dispatch} index={index} contacts={this.props.contacts} contact={item} guids={this.props.guids} />
        })
    }
    addContact( firstname,lastname,position,companyName, country, email){
        if(firstname.value !== '' && lastname.value !== '' && companyName.value !== '' 
        && position.value !== '' && email.value !== '' ){
            let newContact = {
                FullName: firstname.value + " " + lastname.value,
                CompanyName: companyName.value,
                Position: position.value,
                Email: email.value,
                Country: country.value
            };
            this.props.dispatch(addContacts(newContact))
        }
    }
    editContact(firstname,lastname,position,companyName, country, email, GuID){
        if(firstname.value !== '' && lastname.value !== '' && companyName.value !== '' 
        && position.value !== '' && email.value !== '' ){
            let editedContacts = {
                FullName: firstname.value + " " + lastname.value,
                CompanyName: companyName.value,
                Position: position.value,
                Email: email.value,
                Country: country.value,
                GuID
            };
            this.props.dispatch(editContact(editedContacts))
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
                    <CreateMailingListButton dispatch={this.props.dispatch}/>
                    <DeleteContacts dispatch={this.props.dispatch} contacts={this.props.contacts} guids={this.props.guids}/>
                </div>
                
                {this.props.addContactFormIsOpen &&
                    <Popup >
                        {<AddComponentPopup addContact={this.addContact} dispatch={this.props.dispatch}/>}    
                    </Popup>
                }
                {this.props.editFormIsOpen &&
                <Popup>
                    <EditContactPopup editContact={this.editContact}  dispatch={this.props.dispatch} editObject={this.props.editObject}/>
                </Popup>
                }

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        contacts: state.contactsReducer.contacts,
        editObject: state.contactsReducer.editObject,
        addContactFormIsOpen: state.UI.addContactFormIsOpen,
        editFormIsOpen: state.UI.editFormIsOpen,
        guids: state.contactsReducer.guids

    }
}

export default connect(mapStateToProps)(Contacts)