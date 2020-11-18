const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      console.log('Login success')
      return {
        ...state,
        authError: null
      }
      break;
    case 'LOGIN_FAIL':
      console.log('Login error');
      return {
        ...state,
        authError: 'Login Failed'
      };
      break;
    case 'SIGNOUT_SUCCESS':
      console.log('Signout success');
      return state;
      break;
    case 'SIGNOUT_FAIL':
      console.log('Signout error');
      return state;
      break;
    default:
      return state;
  }
};

export default authReducer;