import React from 'react';
import  { closeResponseMessage } from '../../actions/responseMessageActions';

export default function ResponseMessage({dispatch, responseMessage}) {
    console.log(closeResponseMessage)
    return (
        <div className="popup_container">
            <div className="popup_content">
                <div className="response_message_content">
                    <p className="response_message_text">{responseMessage}</p>
                    <div className="clear"></div>
                    <button id="confirmButton" className="responseMessage" onClick={()=>dispatch(closeResponseMessage())}>OK</button>
                </div>
                    
                
            </div>
        </div>
    )
}