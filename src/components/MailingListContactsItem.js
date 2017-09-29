import React from 'react';
import {collectGuIDs} from '../actions/contactsActions';

export default function MailingListContactsItem({item, dispatch, index, contacts, guids}) {
    return (
            <tr >
                <td><input className="checkBoxMailingList"  type="checkbox"
                       onClick={(event) => {
                           dispatch(collectGuIDs(index, event, contacts, guids))
                       }}
                /> </td>
                <td >
                    {item["Full Name"]}
                </td>
                <td >
                    {item["Company Name"]}
                </td>
                <td  >
                    {item["Position"]}
                </td>
                <td >
                    {item["Country"]}
                </td>
                <td  >
                    {item["Email"]}
                </td>
            </tr>
    )
}