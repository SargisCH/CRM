import React, { Component } from 'react';
import { connect } from 'react-redux';
import MailingListContactsItem from '../components/MailingListContactsItem'
class MailingListContacts extends Component {
     renderMailingListContacts(){
        return this.props.activeMailingList.Contacts.map((item,index)=>{
            return <MailingListContactsItem key={item.GuID} item={item} dispatch={this.props.dispatch}/>
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
                    </div>
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        activeMailingList: state.mailingListsReducer.activeMailingList,
        
    }
}

export default connect(mapStateToProps)(MailingListContacts)
