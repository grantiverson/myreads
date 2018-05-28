import React, { Component } from 'react';
import BookShelf from './BookShelf'
// import WantToRead from './WantToRead'
// import Read from './Read'
import './App.css';
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
    console.log(book.id, shelf)
    BooksAPI.update(book.id, shelf)
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

        <BookShelf onChangeShelf={this.changeShelf} books={this.state.books}/>

        <div className="add-button">
          <a>Search</a>
        </div>
      </div>
    );
  }
}

export default App;
