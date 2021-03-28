import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";
import {
    AddTodolistAC,
    AddTodolistTypeActionType,
    ChangeTodolistFilterActionType, ChangeTodolistTitleAC, RemoveTodolistAC,
    RemoveTodolistTypeActionType,
    todoListReducer
} from "./todolists-reducer";

test('correct todoList should be removed', () => {
    let todoListId1 = v1();
    let todoListId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todoListReducer(startState, RemoveTodolistAC(todoListId1))
    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todoListId2)
})

test('new todoList should be added', () => {
    let todoListId1 = v1();
    let todoListId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ]

    let newTodoListTitle = "New TodoList"
    const endState = todoListReducer(startState, AddTodolistAC(newTodoListTitle))
    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodoListTitle)
})

test('correct todoList should change its name', () => {
    let todoListId1 = v1();
    let todoListId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ]

    let newTodoListTitle = "New TodoList"

    const endState = todoListReducer(startState, ChangeTodolistTitleAC(todoListId1, newTodoListTitle))
    expect(endState[0].title).toBe(newTodoListTitle)
    expect(endState[1].title).toBe("What to buy")
})

test('correct filter of todolist should be changed', () => {
    let todoListId1 = v1();
    let todoListId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ]

    let newFilterValue: FilterValuesType = "completed"
    const action: ChangeTodolistFilterActionType = {
        type: 'CHANGE-TODOLIST-FILTER',
        id: todoListId1,
        filter: newFilterValue
    }

    const endState = todoListReducer(startState, action)
    expect(endState[0].filter).toBe(newFilterValue)
    expect(endState[1].filter).toBe("all")
})
