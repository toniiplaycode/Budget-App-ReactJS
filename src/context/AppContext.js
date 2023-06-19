import { createContext, useReducer, useState } from 'react';
import {v4 as uuidv4}  from 'uuid';

let initialState = {};

if(JSON.parse(localStorage.getItem("dataBudget")) === null) {
    initialState = {
        budget: 1000000,
        expenses: [
            {id: uuidv4(), name: 'Breakfast', cost: 30000},
            {id: uuidv4(), name: 'Coffee', cost: 20000},
        ]
    }
    localStorage.setItem("dataBudget", JSON.stringify(initialState));
} else {
    initialState = JSON.parse(localStorage.getItem("dataBudget"))
}

const AppReducer =  (state, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            localStorage.setItem("dataBudget", JSON.stringify({
                ...state,
                expenses: [...state.expenses, action.payload]
            }));

            return{
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case "DELETE_EXPENSE":
            localStorage.setItem("dataBudget", JSON.stringify({
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }));

            return{
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }
        case "EDIT_BUDGE":
            localStorage.setItem("dataBudget", JSON.stringify({
                ...state,
                budget: action.payload
            }));
            return{
                ...state,
                budget: action.payload
            }
    }
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispath] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider 
            value={{
                expenses: state.expenses,
                budget: state.budget,
                dispath
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}