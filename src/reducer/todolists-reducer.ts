import {useState} from "react";
import {TodolistType} from "../App";
import {v1} from "uuid";

type actionType = {
    type: string
    [key: string] : any
}

export const todoListReducer = (state: TodolistType[], action: actionType) => {
    switch (action.type){
        case 'DELETE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            return [
                ...state,
                {id:v1(), title: action.title, filter: "all"}
            ]
        case 'CHANGE-TODOLIST-NAME':
            let todoList = state.find(tl => tl.id=== action.id)
            if(todoList){
                todoList.title=action.title
            }
            return [...state]
        default:
            throw new Error(`I don't understand this action type`)
    }
}
