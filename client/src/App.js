import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Flash from './layout/Flash';
import Footer from './layout/Footer';
import Home from './dashboard/Home';
import Nav from './layout/Nav';
import Login from './auth/Login';
import Profile from './Profile';
import Signup from './auth/Signup';
import Dashboard from './dashboard/Dashboard';
import Paint from './dashboard/Paint';
import Color from './dashboard/Color';
import Vocab from './dashboard/Vocab';
import Bustout from './dashboard/Bustout';
import Calc from './dashboard/Calc';
import Memory from './dashboard/Memory';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount = () => {
    this.getUser();
  }

  getUser = () => {
    // If there is a token in localStorage
    let token = localStorage.getItem('mernToken');
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken');
      this.setState({
        token: '',
        user: null
      });
    } else {
      //   Validate the token against the server
      axios.post('/auth/me/from/token', {
        token: token
      }).then(response => {
        //   Store the token and user
        localStorage.setItem('mernToken', response.data.token);
        this.setState({
          token: response.data.token,
          user: response.data.user
        });
        //   Pass User into child components and display main app
      }).catch(err => {
        // Both the JWT and db errors will be caught here
        console.log('cdm', err);
        this.setState({
          token: '',
          user: null
        });
      })
    }
  }

  updateUser = () => {
    this.getUser();
  }

  setFlash = (t, msg) => {
    this.setState({
      flash: msg,
      flashType: t
    });
  }

  cancelFlash = () => {
    this.setState({
      flash: '',
      flashType: ''
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Nav user={this.state.user} />
              <Flash flashType={this.state.flashType} flash={this.state.flash} setFlash={this.setFlash} cancelFlash={this.cancelFlash} />
              <Route exact path="/" component={
                () => (<Dashboard user={this.state.user} updateUser={this.updateUser} />)} />
              <Route path="/login" component={
                () => (<Login user={this.state.user} setFlash={this.setFlash} updateUser={this.updateUser} />)} />
              <Route path="/signup" component={
                () => (<Signup user={this.state.user} setFlash={this.setFlash} updateUser={this.updateUser} />)} />
              <Route path="/profile" component={
                () => (<Profile user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/explore/paint" component={
                () => (<Paint user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/explore/color" component={
                () => (<Color user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/explore/vocab" component={
                () => (<Vocab user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/explore/bustout" component={
                () => (<Bustout user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/explore/calc" component={
                () => (<Calc user={this.state.user} setFlash={this.setFlash} />)} />
              <Route path="/explore/memory" component={
                () => (<Memory user={this.state.user} setFlash={this.setFlash} />)} />

        </div>
      </Router>
    );
  }
}

export default App;
