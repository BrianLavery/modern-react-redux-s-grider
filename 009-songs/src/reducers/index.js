import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4.05'},
        { title: 'Macarena', duration: '2.30'},
        { title: 'All Star', duration: '3.15'},
        { title: 'I want it that way', duration: '1.45'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

// These set our how state will be updated - value on LHS is state object
const reducers = combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

export { songsReducer, selectedSongReducer, reducers }