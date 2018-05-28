import React from 'react'

function BookShelf (props) {
  const shelves = ['currentlyReading', 'wantToRead', 'read']

  function generateShelfName(shelf) {
    let shelfName = shelf.split(/(?=[A-Z])/).join(" ");
    return shelfName.charAt(0).toUpperCase() + shelfName.slice(1);
  }

  return(
    <div>
      {shelves.map((shelf, index) =>
        <section className="shelf-title" key={index}>
          <h2>{generateShelfName(shelf)}</h2>
          <ul className="books-list">
            {props.books.filter(book => book.shelf === shelf)
            .map((book) => (
              <li className="book-details" key={book.id}>
                <div className="book-image" style={{backgroundImage: "url(" + book.imageLinks.smallThumbnail + ")"}}>
                  <div className="status-selector">
                    <select value={shelf} onChange={(e) => props.onChangeShelf(book, e.target.value)}>
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
        </section>
      )}
    </div>





  )
}

export default BookShelf
