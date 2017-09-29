import React from 'react' 
import {toggleMailingListsToChoose}from '../actions/mailingListActions'
export default function AddToMailingListButton({dispatch}){
    return <button className="btn_table" onClick={() => dispatch(toggleMailingListsToChoose(true))} >Add to mailing list</button>
    
}