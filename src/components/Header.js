import React from 'react';

export default function Header (){
    return (
        <div className="header_container flex">
        <div className="row flex">
            <div className="menu_icon" id="menu_icon">
                <div className="icon_item"></div>
                <div className="icon_item"></div>
                <div className="icon_item"></div>
            </div>
            <div className="header flex">
                <div className="logo">
                    <h1>BetCRM</h1>
                </div>
            </div>
        </div>
    </div>
    )
}