import React, { Component } from 'react';
import Books from './Books';
import './App.css';
// require('dotenv').config();

const API_KEY=process.env.REACT_APP_API_KEY;

class App extends Component {

  state = {
    searchInput: '',
    foundBooks: [],
  }

  searchBooks = (e) => {
    e.preventDefault();
    let searchQurey = this.state.searchInput;
    if (searchQurey !== ''){
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQurey}&maxResults=40&key=${API_KEY}`)
      .then(res => res.json())
      .then(books => {
        this.setState({
          foundBooks: books.items
        })
      })
      .catch(err => console.log('error', err));
    }
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      foundBooks: []
    })
  }

  render() {
    return (
      <div className='App'>
        <h1 className='title'>BOOK FINDER</h1>
        <form onSubmit={this.searchBooks}>
          <input 
            type='search' 
            name='searchInput' 
            onChange={this.onInputChange} 
            value={this.state.searchInput}
            placeholder='Searching for a book?'
          />
          <button className='search_btn'><i class="fas fa-search"></i></button>
        </form>
        <div>
          <Books books={this.state.foundBooks}/>
        </div>        
      </div>
    );
  }
}

export default App;
