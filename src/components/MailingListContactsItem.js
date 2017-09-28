import React from 'react';

export default function MailingListContactsItem({item, dispatch}) {
    return (
        <tr >
            <td><input className="checkBoxMailingList"  type="checkbox"  /> </td>
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