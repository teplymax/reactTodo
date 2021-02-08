import DB from '../Data/DB.json'
import actionTypes from './actionTypes'
const initialState={...DB};

export const todosReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_TODO_LIST:
            let newState={...state}
            console.log(action.payload)
            newState.lists.push(action.payload);
            return {...newState};
        case actionTypes.SHOW_FORM:
            return{...state,showForm:action.payload}
            default:
            return {...state,showForm:false};
    }

    
}