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

    case 'LOGIN_FAIL':
      console.log('Login error');
      return {
        ...state,
        authError: 'Login Failed'
      }

    case 'SIGNOUT_SUCCESS':
      console.log('Signout success');
      return state;

    case 'SIGNOUT_FAIL':
      console.log('Signout error');
      return state;

    case 'SIGNUP_SUCCESS':
      console.log('Signup Success')
      return {
        ...state,
        authError: null
      } 

    case 'SIGNUP_FAIL':
      console.log('Signup Fail')
      return {
        ...state,
        authError: action.err.message
      }  

    default:
      return state;
  }
};

export default authReducer;