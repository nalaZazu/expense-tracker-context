import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';
// const UserContext = React.createContext();

// const UserProvider = UserContext.Provider
// const UserConsumer = UserContext.Consumer

// export { UserProvider, UserConsumer }


const init = {
    transcation: [],
};

let balance = 0;
export const UserProvider = createContext(init)


export const UserGlobal = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, init);
    const addTranscations = (transcation) => {
        if (balance + transcation.transcationAmount >= 0) {
            balance += transcation.transcationAmount
            dispatch({
                type: 'USER_ADD',
                payload: transcation
            })
        } else {
            alert("Need to reCharge your account")
        }

    }

    const deleteTranscation = (id) => {
        dispatch({
            type: 'USER_DELETE',
            payload: id
        })
    }

    // const editTranscation = (id) => {
    //     dispatch({
    //         type: 'USER_EDIT',
    //         payload: id
    //     })
    // }

    return (
        <UserProvider.Provider value={
            {
                transcation: state.transcation,
                addTranscations,
                deleteTranscation,
                // editTranscation

            }
        }>

            {children}
        </UserProvider.Provider>
    )

}