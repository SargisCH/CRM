import React from 'react';
import {TOGGLE_ADD_CONTACTS_FORM} from '../constants';

export default function AddContactButton ({dispatch}){
    return(
        <button className="btn_table" onClick={() => dispatch({type: TOGGLE_ADD_CONTACTS_FORM, toggle: true})}>Add Contact</button>
    )
}