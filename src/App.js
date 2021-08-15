import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BooksApp from './components/BooksApp';
import { BrowserRouter , Route , Switch } from "react-router-dom";
import SearchBooks from './components/SearchBooks';

const App = () => {

    return (
      <BrowserRouter>
       <Switch>
         <Route exact path="/" component={BooksApp} />
         <Route exact path="/search" component={SearchBooks} />
       </Switch>
      </BrowserRouter>
    )
  };

export default App;
