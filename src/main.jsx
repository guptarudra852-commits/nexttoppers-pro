import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.html' // Just to be sure styles load

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)