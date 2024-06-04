import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'semantic-ui-css/semantic.min.css'

// Initial user settings
localStorage.setItem('email', 'user12345@gmail.com')
localStorage.setItem('password', 'resonaterocks!')
localStorage.setItem('fullname', 'John Smith')

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
