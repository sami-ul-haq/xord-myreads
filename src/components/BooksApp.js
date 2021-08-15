import React, { useContext } from 'react';
import BookShelf from './BookShelf'; 
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const BooksApp = () => {

    const { currentlyReading , wantToRead, read} = useContext(BookContext)

    return (
        <div className="app">

        <div className="list-books">


          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">

        
              {  currentlyReading.length > 0 ? <BookShelf shelfTitle="Currently Reading" books={currentlyReading} type="currentlyReading"/> : <h2 className="bookshelf-title"> Add Books To Currently Reading</h2> }
              
              {  wantToRead.length > 0 ? <BookShelf shelfTitle="Want to Read" books={wantToRead} type="wantToRead"/> : <h2 className="bookshelf-title"> Add Books You Want To Read</h2> }

              {  read.length > 0 ?  <BookShelf shelfTitle="Read"  books={read} type="read"/> : <h2 className="bookshelf-title"> No Book Read Yet</h2> }
                 
          </div>

          <div className="open-search">
              <Link to="/search">
                    <button>Add a Book</button>
              </Link>
          </div>

        </div>
    </div>
    )
}

export default BooksApp;
