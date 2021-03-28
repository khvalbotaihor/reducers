import {useState} from "react";
import {TodolistType} from "../App";

type actionType = {
    type: string
    [key: string] : any
}

export const todoListReducer = (state: TodolistType[], action: actionType) => {
    switch (action.type){
        case 'DELETE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        default:
            throw new Error(`I don't understand this action type`)
    }
}
