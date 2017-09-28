import React from 'react';
import {setActiveMailingList, deleteMailingList} from '../actions/mailingListActions'

export default function MailingListsItem({item,index,dispatch,id}) {
    return (
        <tr  className="options">
            <td className="mailingListName"><span onClick={()=>dispatch(setActiveMailingList(id))} >{item.EmailListName}</span></td>
            {/* <td className="mail_list_icon"><img alt="send"  aria-hidden="true" className="icon icons8-Sent" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABHklEQVRIS72Wiw3CMAwF2wlgBDaAEcsElA1gA9igbMAIsAFMALnKQYZ+YpK0kSyEVPn8riaiLGY65UycAtDV1c7VcUoooJcAHu6zFuAtN1SDdO+DAJtcwCGQ70+yytXZFYmjTwjkGwMh5d5VlFYrSCc5CZSU5hMD0lr98gS1poC0VlJux7QCYqqN1MLsov/BRrR2fpO/N8NSQVcJA7AwfnlardYrKGWAFvgPaC0JdVIGCB001n3qYhtq4F3U8f4/6vjim1smHEtwEQC6vk6O9X66jqx35Yol6D0pIPRgg+kn+cFy9dCcFOZjTYQempNgUM8YNQRCD+6ZPqgnBsTuk6Axuwk8qBOhx7/cKD2hRPw58YBcATp9rFdQ8gCzgd4KdUp7nM7SmwAAAABJRU5ErkJggg==" /></td> */}
            {/* <td>{this.state.edit  && <i   className="fa fa-edit" aria-hidden="true"  ></i>}{this.editRender(index)}</td> */}
            <td className="mail_list_icon"><img alt="send" onClick={() => dispatch(deleteMailingList(id,index))}  aria-hidden="true" className="icon icons8-Delete" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABH0lEQVRoQ+2Z3Q2CQBCEoQJL0BLsREvQDizFDrQE6cQStAOtQPcMPGnCfHhgwDHhybnd+dnbkFAWI/+VI+dfWMCvE3QCU0tgE4IOLaKO8f82l/CcI6SQb3hnE0EEPHK5JtaRuEmguqEFiM43MMlcCTSVBKCBw8BJAsMwgl26COj7MiNOCDzQXUCcENgCtPlGpiKwE3AC7w54hLSpQChkKgL7EmtBIFMR2Ak4Aa/RlwN+nW65CmixILC3kLeQt5C3kHIL0GJBYG8hxf+Cfbf7ywRuYeRMMxOjrnFiQU51SeAUDVakCcBWgV0DPJu3unBy6NxDCveouYzn0reAVD+J2NcN56ThB2wam2TIjpJPtbqM0Jd88x63gLx+8mqjT+AJZMctMUe7N34AAAAASUVORK5CYII=" /></td>
        </tr>
    )
}