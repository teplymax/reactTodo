import React from 'react';
import './Sidebar.scss';
import SidebarItem from './SidebarItem/SidebarItem'
import AddButton from'./AddButton/AddButton';
import AddForm from'./AddForm/AddForm';
import {connect} from 'react-redux'

function Sidebar({lists,colors}){
    return(
        <div className="sidebar">
            <h2 className="sidebar__title"><i className="fas fa-list"></i>All tasks</h2>
            <ul className="sidebar__list">
                {lists &&  lists.map((item,index)=>{
                    return <SidebarItem key={item.id} category={item.name} color={colors.filter(c=>{
                        return c.id === item.colorId;
                    })}/>
                })}
            </ul>
            <AddButton />
            <AddForm />
        </div>

    );
}
const mapStateToProps=(state)=>{
    const lists=state.todosReducer.lists;
    const colors=state.todosReducer.colors;
    
    return {lists,colors};
}
const mapDispatchToProps={
}
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);