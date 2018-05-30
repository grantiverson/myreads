import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI.js'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
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
          books
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
  }



  render() {
    const { books, query } = this.state

    let showingBooks = books

    if (showingBooks.error === 'empty query') {
      showingBooks = [{
        'id': 0,
        'title': 'No books found',
        'authors': ['Try another search']
      }]
    }

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
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          >
          </input>
        </div>

        <ul className="books-list">
          {showingBooks.map(book => (
            <Book
              onChangeShelf={this.props.onChangeShelf}
              book={book}
              shelf={book.shelf}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchBooks
