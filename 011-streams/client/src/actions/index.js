import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from './types'
import streams from '../apis/streams'

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

const createStream = formValues => async dispatch => {
    const response = await streams.post('/streams', formValues)

    dispatch({ type: CREATE_STREAM, payload: response.data })
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
    const response = await streams.put(`/streams/${id}`, formValues)

    dispatch({ type: EDIT_STREAM, payload: response.data })
}

const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`)

    dispatch({ type: DELETE_STREAM, payload: id })
}

export { signIn, signOut, createStream, fetchStreams, fetchStream, editStream, deleteStream }