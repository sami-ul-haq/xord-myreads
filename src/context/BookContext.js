import React, { createContext, useEffect, useReducer } from 'react';
import bookReducer from './bookReducer';

const initialState = {
    wantToRead: localStorage.getItem("wantToRead") ? JSON.parse(localStorage.getItem("wantToRead") ) : [],
    currentlyReading: localStorage.getItem("currentlyReading") ? JSON.parse(localStorage.getItem("currentlyReading") ) : [],
    read: localStorage.getItem("read") ? JSON.parse(localStorage.getItem("read") ) : []
}

export const BookContext = createContext();

const BookContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(bookReducer, initialState);

    const addBooksContinueRead = (movie) => {
        dispatch({type: "CURRENTY_READING" , payload: movie});
    }

    const addBooksWantsToRead= (movie) => {
        dispatch({type: "WANT_TO_READ" , payload: movie})
    }

    const addBooksToRead = (movie) => {
        dispatch({type: "READ" , payload: movie})
    }

    const removeBook = (id) => {
        dispatch({type: "NONE" , payload: id})
    }


    useEffect(()=>{
        localStorage.setItem("wantToRead" , JSON.stringify(state.wantToRead));
        localStorage.setItem("currentlyReading" , JSON.stringify(state.currentlyReading));
        localStorage.setItem("read" , JSON.stringify(state.read));
    } , [state])

    return(
        <BookContext.Provider value={
            {
                wantToRead: state.wantToRead,
                currentlyReading: state.currentlyReading,
                read: state.read,
                addBooksContinueRead,
                addBooksWantsToRead,
                addBooksToRead,
                removeBook
            }
        }>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
