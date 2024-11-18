import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './static/index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <App />
    </Router>
  </StrictMode>
)
