import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './components/App'
import { reducers, authReducer } from './reducers'

const store = configureStore({ reducer: { auth: authReducer } })

createRoot(document.querySelector('#root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)