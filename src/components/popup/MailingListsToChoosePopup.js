import React from 'react'
import MailingListToChooseItem from '../MailingListToChooseItem'
import {toggleMailingListsToChoose} from '../../actions/mailingListActions'
export default function MailingListToChoosePopup ({guids,mailingLists, dispatch}){
    function renderMailingListName(){
        console.log(mailingLists)
        return mailingLists.map((item, index) => {
            console.log(item)
            return <MailingListToChooseItem guids={guids} dispatch={dispatch} mailingListName={item.EmailListName} id={item.EmailListID} key={item.EmailListID}/>
        })
    }
    return (
        <div className="mailing_lists_to_choose">
            {renderMailingListName()}
            <div className="buttons cancel_mailing_list_choose">
                <button className="btn-table" onClick={() => dispatch(toggleMailingListsToChoose(false))}>Cancel</button>
            </div>
        </div>
    )
}