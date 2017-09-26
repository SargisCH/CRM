import React from 'react';
import {toggleMailingListForm} from '../../actions/mailingListActions'

export default function CreateMailingListPopup({dispatch, createMailingList}) {
    let mailingListName;
    function submit(e){
        e.preventDefault();
        console.log(mailingListName)
        createMailingList(mailingListName);
    }
    return (
            <form onSubmit={submit} className="mailing_list_form">
                <div className="mailing_list_input">
                    <p>Name of mailing list 
                        <input type="text" ref={(ref) => mailingListName = ref} required/>
                    </p>
                    <div className="mail_list_buttons">
                        <button id="btn_create" className="btn_table" > Create </button>
                        <button id="mail_btn_cancel" onClick={() => dispatch(toggleMailingListForm(false))} className="btn_table"> Cancel </button>
                    </div>
                </div>
            </form>
    )
}