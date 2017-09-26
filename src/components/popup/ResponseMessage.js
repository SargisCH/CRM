import React from 'react';

export default function ResponseMessage({dispatch, responseMessage}) {
    return (
        <div className="popup_container">
            <div className="popup_content">
                <div className="response_message_content">
                    <p className="response_message_text">{responseMessage}</p>
                    <div className="clear"></div>
                    <button id="confirmButton" className="responseMessage">OK</button>
                </div>
                    
                
            </div>
        </div>
    )
}