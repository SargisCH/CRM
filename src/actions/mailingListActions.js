import {
    TOGGLE_MAILING_LIST_FORM
} from '../constants';

export function toggleMailingListForm(toggle) {
    return {
        type: TOGGLE_MAILING_LIST_FORM,
        toggle
    }
}
export const createMailingList = (mailingListName) => (dispatch) => {
    console.log(mailingListName)
    fetch('http://crmbetc.azurewebsites.net/api/emaillists', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        body: JSON.stringify({EmailListName: mailingListName.value, contacts:[]}),
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(res => console.log(res))
}