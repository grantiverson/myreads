import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

function BookShelf (props) {

  const shelves = ['currentlyReading', 'wantToRead', 'read']

  function generateShelfName(shelf) {
    let shelfName = shelf.split(/(?=[A-Z])/).join(" ");
    return shelfName.charAt(0).toUpperCase() + shelfName.slice(1);
  }

  const { onChangeShelf, books } = props

  return(
    <div>
      {shelves.map((shelf, index) =>
        <section className="shelf-title" key={index}>
          <h2>{generateShelfName(shelf)}</h2>
          <ul className="books-list">
            {books.filter(book => book.shelf === shelf)
            .map(book => (
              <Book
                onChangeShelf={onChangeShelf}
                book={book}
                shelf={shelf}
              />
            ))}
          </ul>
        </section>
      )}
      <Link
        to="/search"
        className="add-button">
        Search
      </Link>
    </div>

  )
}

export default BookShelf
