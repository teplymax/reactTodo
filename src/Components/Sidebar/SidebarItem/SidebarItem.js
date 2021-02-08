import React from 'react';
import './SidebarItem.scss';
import {connect} from 'react-redux'
function SidebarItem(props){
    return(
        <li className="sidebar__item">
            <i className="icon" style={{background:`${props.color[0].hex}`}}></i><span className="sidebar__item-text">{props.category}</span>
            <button className="delete"><i className="fas fa-times delete__icon"></i></button>
        </li>
    );
}
const mapStateToProps=state=>{
    return state;
}
const mapDispatchToProps={};
export default connect(mapStateToProps,mapDispatchToProps)(SidebarItem);