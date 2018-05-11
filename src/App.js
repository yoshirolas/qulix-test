import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Heading from './components/Heading';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Navbar from './components/Navbar';
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
      loading: true,
      access_token: null,
      userName: 'User name',
      userAvatarUrl: 'images/profile_mask.png'
    }   
  }

  componentDidMount() {
    setTimeout(() => {
      
      const user = window.gapi.auth2.getAuthInstance().currentUser.get();
      const profile = user.getBasicProfile();
      const access_token = user.getAuthResponse().access_token;

      if (access_token) {
        const userName = profile.getGivenName();
        const userAvatarUrl = profile.getImageUrl();
        this.setState({
          showLogIn: false,
          access_token: access_token,
          userName: userName,
          userAvatarUrl: userAvatarUrl
        });
        this.props.dispatch(asyncGetMailList(this.state.access_token))
      } else {
        this.setState({
          loading: false,
        }) 
      }
    }, 3000)
  }

  succsessResponseGoogle = (response) => {

    const user = window.gapi.auth2.getAuthInstance().currentUser.get();
    const profile = user.getBasicProfile();
    const access_token = user.getAuthResponse().access_token;

    if (access_token) {
      const userName = profile.getGivenName();
      const userAvatarUrl = profile.getImageUrl();
      this.setState({
        showLogIn: false,
        access_token: access_token,
        userName: userName,
        userAvatarUrl: userAvatarUrl
      });
      this.props.dispatch(asyncGetMailList(this.state.access_token))
    } else {
      this.setState({
        loading: false,
      }) 
    }
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
        <Header 
          userName={this.state.userName}
          userAvatarUrl={this.state.userAvatarUrl}
        />
        <Navbar/>
        <main className="container main">
          <Aside/>
          <section className="mainSection">
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
          </section>
        </main>
      </div>

    );
  }
}

export default connect()(App);