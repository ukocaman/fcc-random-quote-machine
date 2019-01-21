import React, { Component } from 'react';
import './App.css';
import QuoteCard from './QuoteCard'
import { colors, quotes }from './data'

class App extends Component {
  state = {
    color: colors[Math.floor(Math.random() * colors.length)],
    quote: quotes[Math.floor(Math.random() * quotes.length)],
  }
  
  changeQuote = () => {
    let quote = this.state.quote
    while (quote.id === this.state.quote.id) {
      const randomNo = Math.floor(Math.random() * quotes.length)
      quote = quotes[randomNo]   
    }
    this.setState({
      quote
    })
  }

  changeColor = () => {
    let color = this.state.color
    while (color === this.state.color) {
      const randomNo = Math.floor(Math.random() * colors.length)
      color = colors[randomNo]   
    }
    this.setState({
      color
    })
  }

  handleClick = () => {
    this.changeColor()
    this.changeQuote()
  }

  styles = {
    container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }

  render() {
    return (
      <div style={{ ...this.styles.container, backgroundColor: this.state.color }}>
        <QuoteCard 
          quote = {this.state.quote}
          color = {this.state.color} 
          onClick = {this.handleClick} />
      </div>
    );
  }
}

export default App;
