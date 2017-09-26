import React from 'react';
import {toggleMailingListForm} from '../actions/mailingListActions'

export default function CreateMailingListButton ({dispatch}) {
    return (
        <button className="btn_table" onClick={()=> dispatch(toggleMailingListForm(true))} >Create mailing list</button>
    )
}