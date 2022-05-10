import { SIGN_IN, SIGN_OUT } from './types'

const signIn = () => {
    return {
        type: SIGN_IN
    }
}

const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export { signIn, signOut }