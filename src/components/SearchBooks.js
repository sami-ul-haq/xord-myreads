import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from './Book';


const SearchBooks = () => {

    const [query, setQuery] = useState("Android");
    const [loading, setLoading] = useState(true);

    const [books, setBooks] = useState([]);
    
    const searchBooks = async () => {
        try{
            const result = await search(query);
            setBooks(result);
            setLoading(false);
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        searchBooks();
        // eslint-disable-next-line
    }, [query])



    return (
        <div className="search-books">
        <div className="search-books-bar">
            <Link to="/">
                <button className="close-search">Close</button>
            </Link>
          <div className="search-books-input-wrapper">

            <input type="text" placeholder="Search by title or author" value={query} onChange={(e)=>setQuery(e.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
            { loading ? <h2>Loading Books... </h2> : ""}
          <ol className="books-grid">
              {
                  books ? 
                  books.map((book) => <Book book={book} key={book.id}/> ) : <h1>Search Books</h1>
              }
          </ol>
        </div>
      </div>
    )
}

export default SearchBooks;
