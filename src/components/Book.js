import React from 'react';
import Select from './Select';

const Book = ({book , type}) => {

    const {title , authors, imageLinks} = book;
    
    return (
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
              <Select book={book} type={type}/>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
}

export default Book;
