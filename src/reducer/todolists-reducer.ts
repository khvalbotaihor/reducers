import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export type RemoveTodolistTypeActionType = {
    type: 'REMOVE-TODOLIST',
    id: string
}
export type AddTodolistTypeActionType = {
    type: 'ADD-TODOLIST',
    title: string
}
export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    id:string,
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    id:string,
    filter: FilterValuesType
}

type actionsType = RemoveTodolistTypeActionType | AddTodolistTypeActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType;

export const todoListReducer = (state: TodolistType[], action: actionsType): Array<TodolistType> => {
    switch (action.type){
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            return [
                ...state,
                {id:v1(), title: action.title, filter: "all"}
            ]
        case 'CHANGE-TODOLIST-TITLE':
            let todoListChangeTitle = state.find(tl => tl.id=== action.id)
            if(todoListChangeTitle){
                todoListChangeTitle.title=action.title
            }
            return [...state]
        case 'CHANGE-TODOLIST-FILTER':
            let todoList = state.find(tl => tl.id=== action.id)
            if(todoList){
                todoList.filter=action.filter
            }
            return [...state]
        default:
            throw new Error(`I don't understand this action type`)
    }
}

export const RemoveTodolistAC = (todolistId: string) : RemoveTodolistTypeActionType => {
   return {type: 'REMOVE-TODOLIST', id: todolistId}
}
export const AddTodolistAC = (title: string) : AddTodolistTypeActionType => {
   return {type: 'ADD-TODOLIST', title: title}
}
export const ChangeTodolistTitleAC = (id: string, title: string) : ChangeTodolistTitleActionType => {
   return {type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}
}
export const ChangeTodolistFilterAC = (id: string, filter: FilterValuesType) : ChangeTodolistFilterActionType => {
   return {type: 'CHANGE-TODOLIST-FILTER', id: id, filter: filter}
}
