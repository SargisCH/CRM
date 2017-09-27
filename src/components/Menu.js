import React, {Component}  from 'react';
 
export default function Menu () {
    return (
        <div className="open menu" >
        <ul className="list_menu">
          <li className="menu_item">
            <a className="menu_button">
               Contacts  
              <i className="activeMenuIcon fa fa-caret-left"></i>
            </a>
          </li>
          <li className="menu_item">
            <a className="menu_button">
              Mailing Lists
              <i className="activeMenuIcon fa fa-caret-left"></i>
            </a>
          </li>
        </ul>
      </div>
    )
}
/*
activeClassName="active" to='/contacts'
activeClassName="active" to='/mailingList'

a tegeri vrinna 
*/




