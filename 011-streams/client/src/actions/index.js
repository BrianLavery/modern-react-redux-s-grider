import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from './types'
import streams from '../apis/streams'
import history from '../history'

const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

// We get the getState argument in all action creators and use it to get other state
const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth
    const response = await streams.post('/streams', { ...formValues, userId })

    dispatch({ type: CREATE_STREAM, payload: response.data })
    // Programmatic navigation to redirect user after we create the stream
    // It is hard to get access to BrowserRouter history outside of a React Component
    // We did this by creating a custom history object and then using React Router
    history.push('/')
}

const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams')

    dispatch({ type: FETCH_STREAMS, payload: response.data })
}

const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`)

    dispatch({ type: FETCH_STREAM, payload: response.data })
}

const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues)

    dispatch({ type: EDIT_STREAM, payload: response.data })
    history.push('/')
}

const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`)

    dispatch({ type: DELETE_STREAM, payload: id })
}

export { signIn, signOut, createStream, fetchStreams, fetchStream, editStream, deleteStream }