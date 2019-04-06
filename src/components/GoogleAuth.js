import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  // state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        // after library is initialized, assigned the auth instance to this.auth
        this.auth = window.gapi.auth2.getAuthInstance();
        // update auth state inside redux store
        this.onAuthChange(this.auth.isSignedIn.get());
        // Wait for authentication status to change at some point in the future
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }
  // arrow function so it's context is bound to componnet
  // called anytime the authentication status changes
  onAuthChange = (isSignedIn) => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    if(isSignedIn) {
      // pass in user id
      this.props.signIn(this.auth.currentUser.get().getId()); // call action creator
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton(){
      if(this.props.isSignedIn === null ){
        return null;
      } else if(this.props.isSignedIn) {
        return (
          <button onClick={this.onSignOutClick} className="ui red google button">
            <i className="google icon"/>
            Sign Out
          </button>
        );
      } else {
        return (
          <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"/>
          Sign in with Google
          </button>
        );
      }
  }



  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
