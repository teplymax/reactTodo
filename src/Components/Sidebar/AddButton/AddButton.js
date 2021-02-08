import React from 'react';

import './AddButton.scss';
import Context from '../../../context'
function AddButton(){
    let {toggleForm}=React.useContext(Context);
    return(
        <div className="button" onClick={toggleForm}>
            <i className="fas fa-plus"></i><span>Add new folder</span>
        </div>
    )
}

export default (AddButton);
