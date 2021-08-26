import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../context/BookContext';

const Select = ({book , type}) => {

    const [ bookStatus , setBookStatus ] = useState("");
    const { addBooksContinueRead, addBooksWantsToRead, addBooksToRead, removeBook } = useContext(BookContext);

    const bookHandler = (book) => {
        if(bookStatus === "currentlyReading"){
            addBooksContinueRead(book);
        } else if(bookStatus === "wantToRead"){
            addBooksWantsToRead(book);
        } else if(bookStatus === "read"){
            addBooksToRead(book);
        } else if(bookStatus === "none"){
            removeBook(book.id);
        } else{
            return false;
        }
    }

    useEffect(() => {
        bookHandler(book);
        // eslint-disable-next-line
    }, [bookStatus])

    return (
    <select value={bookStatus} onChange={(e)=>setBookStatus(e.target.value)}>
        <option value="move">Move to...</option>
        <option value="currentlyReading" disabled={type === "currentlyReading" ? true : false}>Currently Reading</option>
        <option value="wantToRead" disabled={type === "wantToRead" ? true : false}>Want to Read</option>
        <option value="read" disabled={type === "read" ? true : false}>Read</option>
        <option value="none" >None</option>
      </select>
    )
}

export default Select;
