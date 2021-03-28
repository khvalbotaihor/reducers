import {useState} from "react";
import {TodolistType} from "../App";

type actionType = {
    type: string
    [key: string] : any
}

export const todoListReducer = (state: TodolistType[], action: actionType) => {
    switch (action.type){
        case 'XXX':
            return state;
        default:
            throw new Error(`I don't understand this action type`)
    }
}
