import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product'

const http = new HttpService();


class App extends Component {
    
	constructor(props) {
		super(props);
		
		//Bind functions
		this.loadData = this.loadData.bind(this);
		this.loadData();
	}
    
	loadData = () => {
		http.getProducts().then(products => {
			console.log(products);
		}, err=> {
			
		});
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
		<div className="container App-main">
			<div className="row">
				<Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="http://pop.h-cdn.co/assets/cm/15/05/54ca62c3d99f0_-_waterguns-5.jpg"/>
				<Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="http://pop.h-cdn.co/assets/cm/15/05/54ca62c3d99f0_-_waterguns-5.jpg"/>
				<Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="http://pop.h-cdn.co/assets/cm/15/05/54ca62c3d99f0_-_waterguns-5.jpg"/>
			</div>
			
		</div>
	</div>
    );
  }
}

export default App;
