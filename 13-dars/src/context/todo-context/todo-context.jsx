/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import { todoReducer } from "./todo-reducer";

const initialState = { todoList: [] };
export const TodoContextProvider = React.createContext({});

export const TodoContext = ({ children }) => {
    const [data, dispatch] = React.useReducer(todoReducer, initialState);
    return (
        <TodoContextProvider.Provider value={{ data, dispatch }}>
            {children}
        </TodoContextProvider.Provider>
    );
};
