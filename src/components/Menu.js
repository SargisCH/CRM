import React, {Component}  from 'react';
 
export default function Menu ({menuIsOpen}) {
    return (
        <div className={menuIsOpen ? "open menu" : "menu" }>
        <ul className="list_menu">
          <li className="menu_item">
            <a activeClassName="active" to='/contacts'>
               Contacts  
              <i className="activeMenuIcon fa fa-caret-left"></i>
            </a>
          </li>
          <li className="menu_item">
            <a activeClassName="active" to='/mailingList'>
              Mailing Lists
              <i className="activeMenuIcon fa fa-caret-left"></i>
            </a>
          </li>
        </ul>
      </div>
    )
}
