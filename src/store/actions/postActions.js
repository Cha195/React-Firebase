export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('post').add({
            ...post,
            authorFirstName: 'Dwight',
            authorLastName: 'Schrute',
            authorid: 12345,
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