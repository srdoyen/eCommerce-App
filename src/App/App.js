import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';

const http = new HttpService();


class App extends Component {
    
	constructor(props) {
		super(props);
		http.getProducts();
	}
    
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi Sarah pay attention.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Welcome to the Swag Shop
          </a>
        </header>
      </div>
    );
  }
}

export default App;
