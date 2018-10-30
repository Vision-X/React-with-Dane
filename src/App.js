import React, { Component, Fragment } from 'react';
import './App.css';
import RickandMorty from './RickandMorty.jsx';
// import Characters from './Characters.jsx';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  _logState = () => {
    console.log(this.state.data);
  }

  _getDataAndStore = () => {
    let url = 'https://rickandmortyapi.com/api/character/';
    let dataGetter = response => {
      let arr = [];
      for (let key in response) {
        arr.push(response[key])
      }
      this.setState({ data: arr }, this._logState)
    }
    return fetch(url)
           .then(res => res.json())
           .then(dataGetter)
           .catch()
  }

  componentDidMount = () => {
    this._getDataAndStore();
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>Welcome to the Rick and Morty site lulz</h1>
          {/* <Route path="/characters"
                 component={ Characters }
                 data={this.state.data[1]} >
              <p>Click mehhhhh</p>
          </Route> */}
          <Link to="/characters">Characters</Link>
        </header>
        <p>App JS code here</p>
        <RickandMorty rmData={this.state.data[1]} />
      </Fragment>
    );
  }
}

export default App;
