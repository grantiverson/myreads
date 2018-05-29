import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI.js'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    if (!query) {
      query = ' '
    }
    this.setState({ query: query.trim() })
    BooksAPI.search(query)
    .then((books) => {
      this.setState({
        books
      })
    })
  }



  render() {
    const { onChangeShelf, booksOnShelf } = this.props
    const { books, query } = this.state

    let showingBooks = books

    if (showingBooks.error === 'empty query') {
      showingBooks = [{
        'id': 0,
        'title': 'No books found',
        'authors': ['Try another search']
      }]
    }

    function checkForImg(book) {
      if (!book.imageLinks) {
        return book.imageLinks = 'https://via.placeholder.com/128x170/ff7f7f/333333?text=NoImage'
      }
    }

    showingBooks.map(book => {
      book.shelf = 'none',
      booksOnShelf.forEach(bookOnShelf => {
        book.id === bookOnShelf.id && (
          book.shelf = bookOnShelf.shelf
        )
      })
    })

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
            onChange={(event) => this.updateQuery(event.target.value)}
          >
          </input>
        </div>

        <ul className="books-list">
          {showingBooks.map((book, index) => (
            checkForImg(book),
            <li className="book-details" key={book.id}>
              <div className="book-image" style={{backgroundImage: "url(" + book.imageLinks.smallThumbnail + ")"}}>
                <div className="status-selector">
                  <select value={book.shelf} onChange={(e) => onChangeShelf(book, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                  </select>
                </div>
              </div>
              <p>{book.title}</p>
              {book.authors && <p><span className="gray-text">{book.authors[0]}</span></p> }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchBooks
