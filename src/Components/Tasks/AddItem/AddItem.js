import React from 'react'
import {connect} from 'react-redux'

import './AddItem.scss'

function AddItem({}){

    return(<div className="add-item"><i className="fas fa-plus"></i>Add item</div>)
}

const mapStateToProps=(state)=>{

    return{};
}
const mapDispatchToProps={};

export default connect(mapStateToProps,mapDispatchToProps) (AddItem);