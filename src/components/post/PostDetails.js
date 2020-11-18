import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const PostDetails = (props) => {
  const {post} = props;
  console.log(post);

  if(!props.auth.uid) return(<Redirect to="/signin"/>)

  if(post) {
    return (
      <div className="container section post-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p>{post.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
            <div>
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit",
                timeZone: 'Asia/Shanghai',
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true
              }).format(post.createdAt)}
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return(
      <div className="container center">
        Loading Post...
      </div>
    )
  }
}

const mapStatetoProps = (state, myprops) => {
  const id = myprops.match.params.id;
  const posts = state.firestore.data.post;
  const post = posts ? posts[id] : null
  
  return({ 
    post,
    auth: state.firebase.auth 
  });
}

export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
    { collection: 'post' }
  ])
)(PostDetails);