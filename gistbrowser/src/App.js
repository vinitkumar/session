import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GistList from './GistList';
import Gist from './Gist';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gistList: null
    };
  }

  componentDidMount() {
    const _this = this;
    const apiURl = `https://api.github.com/gists?client_id=6396a71f53863e556b11&&client_secret=098d29751f484f46307027baf674d072ae97050a`;
    fetch(apiURl).then(function (response){
      return response.json();
    }).then(function(json) {
      _this.setState({gistList: json});
    })
    console.log('Hello, I am from the App component');
  }



  render() {
    let gists = this.state.gistList;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <div className="sidebar">
              <GistList gists={this.state.gistList} />
            </div>
            <div className="main-content">
              <Route path="/gists/:gistId" render={({match})=> (
                  <Gist key={match.params.gistId} gist={gists.find(g=> g.id === match.params.gistId )} />
                )} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
