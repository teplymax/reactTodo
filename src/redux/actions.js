import types from './actionTypes'

let nextTodoId = 0
export const addTodoList = content => ({
  type: types.ADD_TODO_LIST,
  payload: content
});
