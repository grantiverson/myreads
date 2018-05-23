import React, { Component } from 'react';
import CurentlyReading from './CurentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="bookshelf-title">
          <h1 className="title">My Reads</h1>
        </header>
        <section className="shelf-title">
          <h2>Curently Reading</h2>
          <CurentlyReading />
        </section>
        <section className="shelf-title">
          <h2>Want to Read</h2>
          <WantToRead />
        </section>
        <section className="shelf-title">
          <h2>Read</h2>
          <Read />
        </section>
        <div className="add-button">
          <a></a>
        </div>
      </div>
    );
  }
}

export default App;
