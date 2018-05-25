import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI.js'

class CurrentlyReading extends Component {
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

  chooseShelf = (book) => {
    console.log(book)
    console.log('book.shelf:', book.shelf)
    this.setState({
      books: 'read'
    })
    console.log('changed to', book.shelf)
  }

  render() {
    return(
      <ul className="books-list">
        {this.state.books.filter(book => book.shelf === 'currentlyReading')
        .map((book, index) => (
          <li className="book-details" key={index}>
            <div className="book-image" style={{backgroundImage: "url(" + book.imageLinks.smallThumbnail + ")"}}>
              <div className="status-selector">
                <select defaultValue="currentlyReading" onChange={() => this.chooseShelf(book)}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <p>{book.title}</p>
            <p><span className="gray-text">{book.authors[0]}</span></p>
          </li>
        ))}
      </ul>
    )
  }
}

export default CurrentlyReading
