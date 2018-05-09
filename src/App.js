import React, { Component } from 'react';
import Heading from './components/Heading';
import Footer from './components/Footer';
import SearchFormRow from './containers/SearchFormRow';
import PostsContainer from './containers/PostsContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gapi: null
    }   
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    script.onload = () => {
      window.gapi.load('auth2', () => {
        var user = window.gapi.auth2.getAuthInstance().currentUser.get();
        console.log(user)
        this.setState({
          gapi: user
        });
      });
    };
    document.body.appendChild(script);
    console.log(this.state)
  }

  render() {

    return (
      <div>
        <div className="g-signin2" data-onsuccess="onAuthorize" data-theme="dark"></div>
    
        <Heading/>
        <SearchFormRow/>
        <PostsContainer/>
        <Footer/>
      </div>

    );
  }
}

export default App;