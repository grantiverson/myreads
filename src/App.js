import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import './App.css'
import * as BooksAPI from './utils/BooksAPI.js'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({
        books
      })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update({id: book.id}, shelf)
    .then(response => {
      this.updateShelves();
    })
  }

  updateShelves() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({
        books
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="bookshelf-title">
          <h1 className="title">My Reads</h1>
        </header>
        <Route exact path="/" render = {() => (
          <BookShelf
            onChangeShelf={this.changeShelf}
            books={this.state.books}
          />
        )}/>
        <Route path="/search" render = {() => (
          <SearchBooks
            onChangeShelf={this.changeShelf}
            booksOnShelf={this.state.books}
          />
        )}/>
      </div>
    );
  }
}

export default App;
