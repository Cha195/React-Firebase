export const createPost = (post) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;
        firestore.collection('post').add({
            ...post,
            authorid,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            createdAt: new Date()
        }).then(()=> {
            dispatch({
                type: 'CREATE_POST',
                post
            })
        }).catch((err) => {
            dispatch({
                type: 'CREATE_POST_ERROR',
                error: err
            })
        })
    }
}