import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI.js'

class ListBooks extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      console.log(books)
      this.setState({
        books
      })
    })
  }

  render() {
    return(
      console.log('this.state.books:', this.state.books),
      <ul className="books-list">
        {this.state.books.map((book, index) => (
          <li className="book" key={index}>
            <img src={book.imageLinks.smallThumbnail} alt={book.title} className="book-image" />
            <div className="status-selector">
            </div>
            <p>{book.title}</p>
            <p><span className="gray-text">{book.authors[0]}</span></p>
          </li>
        ))}
      </ul>
    )
  }
}

export default ListBooks
