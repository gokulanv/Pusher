import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom' 
import 'whatwg-fetch'; // to make api requests to backend
import HelloWorld from '../HelloWorld/HelloWorld';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sample: []
    };

    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler({history}){
    console.log(" loginHandler ");
    //history.push('/helloworld')
  }

  render() {
    return (
      <>
          <div>
            <label htmlFor="username">Name: </label>
            <input type="text" id="username"></input>
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password"></input>
          </div>

        <button><Link to="/landing-page">Login</Link></button>
      </>
    );
  }
}

export default Home;
