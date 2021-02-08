import React,{Fragment} from 'react'
import {connect} from 'react-redux'

import './Tasks.scss'
import AddItem from './AddItem/AddItem'
import TasksItem from './TasksItem/TasksItem'

function Tasks({lists,tasks}){


     return(<div className="tasks">
        <h2 className="tasks__title">{lists[0].name}</h2>
        <hr/>
        <ul className="tasks__list">
        {tasks && tasks.map(task=>{
            return <TasksItem text={task.text} status={task.completed} id={task.id} key={task.id}/>
        })}
        </ul>
        <AddItem/>
    </div>)
}
const mapStateToProps=(state)=>{
    const lists=state.todosReducer.lists;
    const tasks= state.todosReducer.tasks;
    return{lists,tasks};
}
const mapDispatchToProps={};
export default connect(mapStateToProps,mapDispatchToProps) (Tasks);