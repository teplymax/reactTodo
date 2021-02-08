import React from 'react'
import {connect} from 'react-redux'

import './TasksItem.scss'


function TasksItem({id}){
    

    return(<li className="tasks__item">
        <div className="checkbox">
            <input type="checkbox"  id={id}/>
            <label htmlFor={id}>
             <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
            </label> 
        </div>
        <span>Here is tasks item!!</span>
         <button className="delete"><i className="fas fa-times delete__icon"></i></button>
         </li>)
}

const mapStateToProps=(state)=>{
    return {};
}
const mapDispatchToProps={};

export default connect(mapStateToProps,mapDispatchToProps) (TasksItem)