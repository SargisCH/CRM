import {GET_CONTACTS} from '../constants';

export const  getContacts = () => dispatch => {
    fetch("http://crmbetc.azurewebsites.net/api/contacts").then(res => res.json())
    .then(
        res => {
            dispatch( {
                type: GET_CONTACTS,
                contacts: res
            })
        }
    )
}
