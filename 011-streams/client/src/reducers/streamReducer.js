import { FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM } from '../actions/types'
import _ from 'lodash'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            // mapKeys is lodash function that maps array to object - second argument is what we use as key in our object
            return { ...state, ..._.mapKeys(action.payload, 'id') }  
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            return _.omit(state, action.payload) // In this example the payload from action creator is the id (unlike others where it is the record)
        default:
            return state
    }
}