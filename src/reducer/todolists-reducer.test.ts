import {TodolistType} from "../App";
import {v1} from "uuid";
import {todoListReducer} from "./todolists-reducer";

test('correct todoList should be removed', () => {
    let todoListId1 = v1();
    let todoListId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todoListReducer(startState, {type: 'DELETE-TODOLIST', id:todoListId1})
    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todoListId2)
})
