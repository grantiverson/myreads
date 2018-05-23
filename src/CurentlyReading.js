import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI.js'

class CurentlyReading extends Component {
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

  render() {
    return(
      <ul className="books-list">
        {console.log(this.state.books)}
        {this.state.books.map((book, index) => (
          <li className="book-details" key={index}>
            <div className="book-image" style={{backgroundImage: "url(" + book.imageLinks.smallThumbnail + ")"}}>
              <div className="status-selector">
                <select>
                  <option value="none">Move to...</option>
                  <option value="curentlyReading" selected="selected">Curently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="Read">Read</option>
                  <option value="None">None</option>
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

export default CurentlyReading
