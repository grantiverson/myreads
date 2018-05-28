import React, { Component } from 'react';
import BookShelf from './BookShelf'
import AddBooks from './AddBooks'
import './App.css';
import * as BooksAPI from './utils/BooksAPI.js'

class App extends Component {
  state = {
    screen: 'shelves', // shelves, add
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

  addBooks = () => {
    this.setState({ screen: 'add' })
  }

  backButton = () => {
    this.setState({ screen: 'screen' })
  }

  render() {
    return (
      <div className="App">
        <header className="bookshelf-title">
          <h1 className="title">My Reads</h1>
        </header>
        {this.state.screen === 'shelves' && (
          <BookShelf
            onChangeShelf={this.changeShelf}
            books={this.state.books}
            onAddBooks={this.addBooks()}
          />
        )}
        {this.state.screen === 'add' && (
          <AddBooks />
        )}


      </div>
    );
  }
}

export default App;
