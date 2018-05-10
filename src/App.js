import React, { Component } from 'react';
import { connect } from 'react-redux';
import Heading from './components/Heading';
import Footer from './components/Footer';
import SearchFormRow from './containers/SearchFormRow';
import { asyncGetMailList } from './actions/appActions';
import PostsContainer from './containers/PostsContainer';
import GoogleLogin from 'react-google-login';

const logInBtnStyle = {
  'display': 'block',
  'width': '150px',
  'height': '50px',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogIn: true,
      loading: true
    }   
  }

  componentDidMount() {
    setTimeout(() => {
      const user = window.gapi.auth2.getAuthInstance().currentUser.get();
      const profile = user.getBasicProfile();
      const access_token = user.getAuthResponse().access_token;
      console.log(user);
      console.log(profile);
      console.log(access_token);
      if (user) {
        this.setState({
          showLogIn: false,
        });
        this.props.dispatch(asyncGetMailList(access_token))
      } else {
        this.setState({
          loading: false,
        }) 
      }
    }, 4000)
  }

  succsessResponseGoogle = (response) => {
    console.log(response);
    this.setState({
      showLogIn: false
    }) 
  }

  failureResponseGoogle = (response) => {
    console.log(response);
  }

  render() {

    return (
      <div>
        <GoogleLogin
          style={
            this.state.showLogIn ? logInBtnStyle : { 'display': 'none' }
          }
          clientId="816768694467-9ugg6fppkf96h3g3umtd5cs4qsal6k1o.apps.googleusercontent.com"
          buttonText={ this.state.loading ? "Loading..." : "LogIn" }
          onSuccess={ this.succsessResponseGoogle }
          onFailure={ this.failureResponseGoogle }
          className="controlButtons btn btn-default btn-prevNext"
        />
        <Heading/>
        <SearchFormRow/>
        <PostsContainer/>
        <Footer/>
      </div>

    );
  }
}

export default connect()(App);