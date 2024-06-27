import React,{useReducer,createContext,useContext,useRef} from 'react';

const initialTodos=[
    {
        id:1,
        text:"자바스크립트 예제 만들기",
        check:true
    },
    {
        id:2,
        text:"제이쿼리 공부",
        check:false
    },
    {
        id:3,
        text:"좀더 공부",
        check:false
    }
]

function todoReducer(state,action){
    switch (action.type){
        case 'CREATE':
            return state.concat(action.todo);

            
        case 'TOGGLE':
            return state.map(todo=>
                todo.id===action.id ?{...todo,check :!todo.check}:todo
            )

        case 'CHANGE':
            return state.map(todo=>
                todo.id===action.id ?{...todo,text:action.newtext}:todo
            )

        case 'REMOVE':
            return state.filter(todo=>todo.id !==action.id);
    }
}

const TodoStateContext=createContext();
const TodoDispatchContext=createContext();
const TodoNextIdContext=createContext();



export function TodoProvider({children}){
    const [state,dispatch]= useReducer(todoReducer,initialTodos);
    const nextId=useRef(4);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState(){
    return useContext(TodoStateContext);
}

export function useTodoDispatch(){
    return useContext(TodoDispatchContext);
}

export function useTodoNextId(){
    return useContext(TodoNextIdContext);
}