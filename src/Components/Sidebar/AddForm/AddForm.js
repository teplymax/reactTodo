import React from 'react';
import Context from '../../../context'

import './AddForm.scss'
import {connect} from 'react-redux'
import {addTodoList} from '../../../redux/actions'

function AddForm({colors,addTodoList}){
    // let dispatch=useDispatch();
    let {closeForm,showForm}=React.useContext(Context)
    let[newItem,setNewItem]=React.useState({
        "id": Math.random(),
        "name": "List",
        "colorId": 1
      });
 
    
    const enterName=(name)=>{
        let newState=Object.assign({},newItem);
        newState.name=name;
        setNewItem(newState);
      
    }
    const createItem=()=>{
        console.log(newItem);
        addTodoList(newItem);
       
    }
    const chooseColor=(id)=>{
        let newState=Object.assign({},newItem);
        newState.colorId=id;
        setNewItem(newState);
    }
    if(showForm)  return(
<form className="addForm" >
<input className="addForm__input" type="text" placeholder="Enter name of folder"
 onChange={(e)=>{
     enterName(e.target.value);
     }}/>
 <div className="colors">{colors.map((color,index)=>{
    return <button key={index} className="color" style={{background:`${color.hex}`}}
    onClick={(e)=>{
        e.preventDefault();chooseColor.call(this,color.id);
    }}></button>
})} </div>
<div className="addForm__buttons">
    <input type="submit" value="Create" onClick={(e)=>{
        e.preventDefault();
        closeForm();
        createItem();
    }}/>
    <button className="addForm__cancel" onClick={closeForm}>Cancel</button>
</div>
</form>
); else return null;
}
const mapStateToProps=state=>{
    const colors=state.todosReducer.colors;
    return {colors};
}
const mapDispatchToProps={addTodoList};
export default connect(mapStateToProps,mapDispatchToProps)(AddForm);