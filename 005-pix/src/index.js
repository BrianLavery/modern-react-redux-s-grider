import React from 'react'
// import ReactDOM from 'react-dom' // This is not supported after React 18
import App from './components/App'
import { createRoot } from 'react-dom/client';

createRoot(document.querySelector('#root')).render(<App />)
