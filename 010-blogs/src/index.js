import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore, applyMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { createStore } from 'redux'

import App from './components/App'
import { reducers, dummyReducer } from './reducers'

// Approach from https://redux.js.org/introduction/why-rtk-is-redux-today
// ISSUE - couldn't work out how to apply thunk using that approach
// const store = configureStore({ 
//     reducer: { dummyReducer },
//     middleware: getDefaultMiddleware
// })

const store = createStore(reducers, applyMiddleware(thunk))

createRoot(document.querySelector('#root')).render(
    <Provider store={store} >
        <App />
    </Provider>

)