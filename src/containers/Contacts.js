import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getContacts} from '../actions/contactsActions'
import ContactsListItem from '../components/ContactsListItem'
class Contacts extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(getContacts())
    }
    renderContacts(){
        const {contacts} = this.props;
        return contacts.map((item, index ) => {
            return <ContactsListItem key={item.GuID} contact={item}/>
        })
    }
    render(){
        return(
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
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        contacts: state.contactsReducer.contacts
    }
}

export default connect(mapStateToProps)(Contacts)