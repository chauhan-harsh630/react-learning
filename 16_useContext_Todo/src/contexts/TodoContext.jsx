import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleTodo:(id)=>{}
});

export const TodoProvider = TodoContext.Provider

export function useTodo(){
    return useContext(TodoContext);
}
