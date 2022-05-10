import { SIGN_IN, SIGN_OUT } from './types'
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
    streams.post('/streams', formValues)
}

export { signIn, signOut, createStream }