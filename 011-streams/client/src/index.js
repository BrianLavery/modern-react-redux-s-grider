import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './components/App'
import { reducers, authReducer } from './reducers'

// const store = configureStore({ reducer: { auth: authReducer } })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
)

createRoot(document.querySelector('#root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)