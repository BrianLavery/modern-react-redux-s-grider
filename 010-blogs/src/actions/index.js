import _ from 'lodash'
import jsonplaceholder from "../apis/jsonplaceholder"

// Every time we call one of our action creators from this function we need to dispatch it too
const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts()) // We fetch list of posts here
    
    // We use lodash version of map and we will get the list of all userIds
    const listOfUserIds =_.map(getState().posts, 'userId')
    const uniqueUserIds = _.uniq(listOfUserIds)
    
    uniqueUserIds.forEach(id => dispatch(fetchUser(id)))
}

const fetchPosts = () => async (dispatch) => {
    const response = await jsonplaceholder.get('/posts')

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

const fetchUser = (id) => async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
}

// Memoized solution to avoid calling user API for a user we already have info on
// We need to split out memoize into its own function so that we aren't creating a new memoized function each time we run fetchUser
// Issues - very difficult to understand syntax
// We can't use the function to re-fetch resources if we want easily
// const fetchUser = id => dispatch => _fetchUser(id, dispatch)

// // Use _ in the function name to signify this is a private function
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonplaceholder.get(`/users/${id}`)

//     dispatch({ type: 'FETCH_USER', payload: response.data })
// })

export { fetchPosts, fetchUser, fetchPostsAndUsers }