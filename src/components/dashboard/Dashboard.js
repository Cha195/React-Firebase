import React, { Component } from 'react'
import PostList from '../post/PostList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { compose } from "redux";
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { posts, auth } = this.props;
    if(auth.uid) {
      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <PostList posts={posts} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
          </div>
        </div>
      )
    }
    return(<Redirect to="/signin"/>)
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.post,
    auth: state.firebase.auth
  }
}

export default compose(
  firestoreConnect(() => [{
    collection: 'post'
  }]),
  connect(mapStateToProps)
)(Dashboard)