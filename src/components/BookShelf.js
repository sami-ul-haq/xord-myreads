import React from 'react';
import Book from './Book';

const BookShelf = ({ shelfTitle , books , type}) => {

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map((book , index)=>(
                <Book book={book} key={index} type={type}/>
              ))
            }
          </ol>
        </div>
      </div>
    )
}

export default BookShelf;
