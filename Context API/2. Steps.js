Following are the steps to create context & use that in our app.

1. Create Context

const MyContext = React.createContext(defaultValue);

it creates context object. when react renders a component which uses this context object, it will read the current context value from the closest matching provider.
defaultValue is the initial state.


2. Create Provider 
it is a component which is returned by MyContext obj. it allows consuming (wrapped within it) component to subscribe to context changes.

return (
            <MyContext.Provider
                value={{    // it is a prop in which we can pass values that then accessed by consumer component
                    // we can pass state or handler functions that we need to make available throughout app
                }}
            >
                {this.props.children}   // returns child components inside of it
            </MyContext.Provider>


e.g i have implmented context API in mu money tracker project

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
//initial State

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

//now create a context
export const GlobalContext = createContext(initialState);

//now create a provider component
export const GlobalProvider = ({ children  }) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);

    // actions to perform

    async function addTransaction(transaction) {
        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions',transaction, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
            
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
        
    }

    async function getAllTransactions(){
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
           
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }

    return(<GlobalContext.Provider value={{     // this is provider component
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        getAllTransactions,
        error: state.error,
        loading: state.loading
    }}>
        {children}
    </GlobalContext.Provider>)
}

basically provider provides data & consumer consumes it.


3. Create Consumer
Consumer component consumes data from store. it looks data in closest enclosing provider component. if there is no provider component then it will refer to default values that was passed to createContext().

const Cars = () => (
    <MyContext.Consumer>
        {context => (
            // here context is the object containing current state of our app
        )}
    </MyContext.Consumer>
);



// we can also consume data in a component using useContext() hook.

e.g
import React, { useContext } from 'react';
const { addTransaction } = useContext(MyContext);  // here MyContext is the context name we need to pass to useContext()

// addTransaction is a method defined inside provider component.

