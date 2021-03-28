type StateType = {
    age: number,
    childrenCount: number,
    name: string
}

type actionType = {
    type: string,
    [key: string] : any
}

export const userReducer = (state: StateType, action: actionType) =>{
    switch (action.type){
        case 'INCREMENT-AGE':
            let newState = {...state}
            newState.age = state.age + 1;
            return newState;
        case 'INCREMENT-CHILDREN-COUNT':
            return {
                ...state,
                childrenCount: state.childrenCount + 1
            };
        default:
            throw new Error(`I don't understand this action type`)
    }
}
