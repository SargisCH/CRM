import React from 'react';

export default function Popup({children }){
    return  (
        <div className="popup_container">
            <div className="popup_content">
            {children}
           </div>
        </div>
    )
}
