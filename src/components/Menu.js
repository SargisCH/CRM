import React, {Component}  from 'react';
import {toggleMailingLists} from '../actions/mailingListActions' 

export default function Menu ({dispatch}) {
    return (
        <div className="open menu" >
        <ul className="list_menu">
          <li className="menu_item">
            <a className="menu_button" onClick={()=> dispatch(toggleMailingLists(false))}>
               Contacts  
              <i className="activeMenuIcon fa fa-caret-left"></i>
            </a>
          </li>
          <li className="menu_item">
            <a className="menu_button" onClick={()=> dispatch(toggleMailingLists(true))}>
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




