import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts, addContacts } from '../actions/contactsActions'
import ContactsListItem from '../components/ContactsListItem';
import AddContactButton from '../components/AddContatcButton';
import Popup from './../components/popup/Popup';
import AddComponentPopup from '../components/popup/AddComponentPopup';
import CreateMailingListPopup from '../components/popup/CreateMailingListPopup';
import CreateMailingListButton from '../components/CreateMailingListButton';
import {createMailingList} from '../actions/mailingListActions';
class Contacts extends Component {
    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);
        this.createMailingList = this.createMailingList.bind(this);
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
    createMailingList (mailingListName) {
        this.props.dispatch(createMailingList(mailingListName))
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
                </div>

                {this.props.addContactFormIsOpen &&
                    <Popup >
                        {<AddComponentPopup addContact={this.addContact} dispatch={this.props.dispatch}/>}    
                    </Popup>
                }
                {this.props.createMailingListFormIsOpen &&
                    <Popup >
                        {<CreateMailingListPopup createMailingList={this.createMailingList} dispatch={this.props.dispatch}/>}    
                    </Popup>
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        contacts: state.contactsReducer.contacts,
        addContactFormIsOpen: state.UI.addContactFormIsOpen,
        createMailingListFormIsOpen: state.UI.createMailingListFormIsOpen
    }
}

export default connect(mapStateToProps)(Contacts)