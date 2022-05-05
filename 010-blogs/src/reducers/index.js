import { combineReducers } from "redux"

const dummyReducer = () => {
    return []
}

const reducers = combineReducers({
    dummyReducer
})

export { reducers, dummyReducer }