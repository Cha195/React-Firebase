import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import postReducer from './postReducer'
import { combineReducers } from 'redux'

const rootReducer =  combineReducers({
    auth: authReducer,
    post: postReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;