import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form' // Can rename variables on the fly
import authReducer from './authReducer'

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer
})

export { reducers, authReducer }