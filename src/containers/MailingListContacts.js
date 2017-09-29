import React, { Component } from 'react';
import { connect } from 'react-redux';
import MailingListContactsItem from '../components/MailingListContactsItem'
import DeleteContacts from '../components/DeleteContacts';
class MailingListContacts extends Component {
     renderMailingListContacts(){
        return this.props.activeMailingListContacts.map((item,index)=>{
            return <MailingListContactsItem key={item.GuID} item={item} index={index} dispatch={this.props.dispatch} contacts={this.props.contacts} guids={this.props.guids}/>
        })
    } 
    render() {
        return (
            <div className="mailinglist_table_container">
                    <div className="mailing_list_table">
                        <h2 className="mailinglist_header"> {this.props.mailingListName}</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Full Name</th>
                                    <th>Company Name</th>
                                    <th>Position</th>
                                    <th>Country</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderMailingListContacts()}
                            </tbody>
                        </table>
                        <DeleteContacts dispatch={this.props.dispatch} contacts={this.props.activeMailingListContacts} guids={this.props.guids}/>
                    </div>
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        activeMailingList: state.mailingListsReducer.activeMailingList,
        contacts: state.contactsReducer.contacts,
        guids: state.contactsReducer.guids,
        activeMailingListContacts: state.mailingListsReducer.activeMailingListContacts
        
    }
}

export default connect(mapStateToProps)(MailingListContacts)
