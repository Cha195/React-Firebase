const initState = {
    posts: [
      {id: '1', title: 'help me find peach', content: 'blah blah blah'},
      {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
      {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const PostReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_POST' :
      console.log('created post ', action.post);
      return state;
      break;
    case 'CREATE_POST_ERROR':
      console.log('create post error', action.error);
      return state;
      break;
    default:
      return state;
  }
}

export default PostReducer;