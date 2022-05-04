import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './components/App'
import { reducers, selectedSongReducer, songsReducer } from './reducers'

// createRoot(document.querySelector('#root')).render(
//     <Provider store={createStore(reducers)}>
//         <App />
//     </Provider>
// )

// Took approach from https://redux.js.org/introduction/why-rtk-is-redux-today
createRoot(document.querySelector('#root')).render(
    <Provider store={configureStore({ reducer: { 
        songs: songsReducer,
        selectedSong: selectedSongReducer 
    }})}>
        <App />
    </Provider>
)

// ReactDOM.render(
//     <Provider store={createStore(reducers)}>
//         <App />
//     </Provider>,
//     document.querySelector('#root')
// )