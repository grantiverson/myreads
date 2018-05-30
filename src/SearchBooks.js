import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI.js'

class SearchBooks extends Component {
  state = {
    query: '',
    books: [],
    searchError: false
  }

  updateQuery = query => {
    this.setState({ query })
    if (!query || (query === '')) {
      this.setState({
        books: []
      })
    } else {
      BooksAPI.search(query)
      .then(books => {
        books.map(book => {
          book.shelf = 'none',
          this.props.booksOnShelf.forEach(bookOnShelf => {
            book.id === bookOnShelf.id && (
              book.shelf = bookOnShelf.shelf
            )
          })
        })
        this.setState({
          books: books,
          searchError: false
        })
      })
      .catch(error => {
        this.setState({
          books: [],
          searchError: true
        })
        console.log(this.state.searchError)
      })
    }
  }



  render() {
    return (
      <div>
        <div className="search-bar">
          <Link
            to="/"
            className="back-button">
            Back
          </Link>
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
          >
          </input>
        </div>

        <ul className="books-list">
          {this.state.searchError === true && (
            <div className="search-error">
              Your search did not match any books
            </div>
          )}
          {this.state.searchError === false && (
            this.state.books.map(book => (
              <Book
                onChangeShelf={this.props.onChangeShelf}
                book={book}
                shelf={book.shelf}
                key={book.id}
              />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default SearchBooks
