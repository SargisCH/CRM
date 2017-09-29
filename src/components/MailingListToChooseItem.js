import React from 'react';
import {addToMailingList}  from'../actions/mailingListActions'

export default function MailingListToChooseItem ({dispatch,guids, mailingListName, id}){
    return <p onClick={() => dispatch(addToMailingList(id,guids,mailingListName )) } className="mailing_list_to_choose_item">{mailingListName}</p>
}