import { combineReducers } from 'redux'
import authReducer from './authReducer'

const reducers = combineReducers({
    replaceMe: () => 10
})

export { reducers, authReducer }