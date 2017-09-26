import {
    TOGGLE_MAILING_LIST_FORM,
    CREATE_MAILING_LIST
} from '../constants';

export function toggleMailingListForm(toggle) {
    return {
        type: TOGGLE_MAILING_LIST_FORM,
        toggle
    }
}
export const createMailingList = (mailingListName) => (dispatch) => {
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
    }).then(res => dispatch({type: CREATE_MAILING_LIST, responseMessage: "Mailing List has been created"}))
}