import React, {Component} from 'react';
import {connect} from 'react-redux';
import Contacts from './Contacts';
import Header from '../components/Header';
import Menu from '../components/Menu';
import AddContactButton from '../components/AddContatcButton';
import Popup from './../components/popup/Popup';
import CreateMailingListPopup from '../components/popup/CreateMailingListPopup';
import CreateMailingListButton from '../components/CreateMailingListButton';
import {createMailingList} from '../actions/mailingListActions';
import ResponseMessage from '../components/popup/ResponseMessage'

 class Main extends Component{
     constructor(props){
        super(props);
        this.createMailingList = this.createMailingList.bind(this);
     }
    createMailingList (mailingListName) {
        this.props.dispatch(createMailingList(mailingListName));
    }
    render() {
        return(
            <div className="global_container">
                <div  className="return ">
                    <Header/>
                    <Menu menuIsOpen={true}/>
                    <Contacts/>
                    <div className="buttons">
                    <AddContactButton dispatch={this.props.dispatch} />
                    <CreateMailingListButton dispatch={this.props.dispatch}/>
                </div>

                {this.props.createMailingListFormIsOpen &&
                    <Popup >
                        {<CreateMailingListPopup createMailingList={this.createMailingList} dispatch={this.props.dispatch}/>}    
                    </Popup>
                }
                {this.props.responseMessage &&
                    <ResponseMessage  dispatch={this.props.dispatch} responseMessage={this.props.responseMessage}/>
                }
                
                </div>
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        menuIsOpen: state.UI.menuIsOpen,
        createMailingListFormIsOpen: state.UI.createMailingListFormIsOpen,
        responseMessage: state.UI.responseMessage,
    }
}

export default connect(mapStateToProps)(Main)


