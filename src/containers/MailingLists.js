import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getMailingLists } from '../actions/mailingListActions'
import MailingListsItem from '../components/MailingListsItem';
import MailingListContacts from './MailingListContacts.js'

class MailingLists extends Component {
    componentDidMount() {
        this.props.dispatch(getMailingLists());

    }
    renderMailingLists(){
        return this.props.mailingLists.map((item,index) => {
            return <MailingListsItem key={item.EmailListID} item={item} id={item.EmailListID} index={index} dispatch={this.props.dispatch}/>
        })
    }
    render() {
        return (
            <div>
                <div className="choose_mailing_list">
                    <div className="mailLingListSelection">
                        <table className="mailingListItemsContainer" name="" id="">
                            <tbody>
                                {this.renderMailingLists()}
                            </tbody>
                        </table>
                    </div>
                </div> 
                    {
                        this.props.mailingListContactsIsOpen && <MailingListContacts />
                    }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        mailingLists: state.mailingListsReducer.mailingLists,
        mailingListContactsIsOpen: state.UI.mailingListContactsIsOpen
    }
}

export default connect(mapStateToProps)(MailingLists);