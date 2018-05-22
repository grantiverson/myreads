import React, { Component } from 'react';
import ListBooks from './ListBooks'
import './App.css';

const books = [
  {
    "title":"The Linux Command Line",
    "authors":[]
  },
  {
    "title":"Learning Web Development with React and Bootstrap",
    "authors":[]
  },
  {
    "title":"The Cuckoo's Calling",
    "authors":[]
  },
  {
    "title":"Lords of Finance",
    "authors":[]
  },
  {
    "title":"Needful Things",
    "authors":[]
  },
  {
    "title":"React",
    "authors":[]
  },
  {
    "title":"Satire TV",
    "authors":[]
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">My Reads</h1>
        </header>
        <section className="curently-reading">
          <h2>Curently Reading</h2>
          <ListBooks books={books}/>
        </section>
        <section className="want-to-read">
          <h2>Want to Read</h2>
        </section>
        <section className="read">
          <h2>Read</h2>
        </section>
      </div>
    );
  }
}

export default App;
