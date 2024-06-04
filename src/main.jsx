import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'semantic-ui-css/semantic.min.css'

// Initial user settings
localStorage.setItem('email', 'user12345@gmail.com')
localStorage.setItem('password', 'resonaterocks!')
localStorage.setItem('fullname', 'John Smith')

// Initial contacts
const defaultContactList = [
    {
        'name': 'Matthew Osborne',
        'phone': '+61 424 375 611',
        'email': 'matthewo@gmail.com',
        'birthday': '1990-10-10'
    },
    {
        'name': 'Sheila Jennings',
        'phone': '+61 455 897 541',
        'email': 'matthewo@gmail.com',
        'birthday': '1990-10-10'
    },
    {
        'name': 'Andrew Cucumber',
        'phone': '+61 480 926 071',
        'email': 'matthewo@gmail.com',
        'birthday': '1990-10-10'
    },
    {
        'name': 'Bruce Wayne',
        'phone': '+61 437 000 231',
        'email': 'matthewo@gmail.com',
        'birthday': '1990-10-10'
    },
    {
        'name': 'Esther Rakib',
        'phone': '+61 499 542 666',
        'email': 'estherrakib@gmail.com',
        'birthday': '1990-10-10'
    },
]
localStorage.setItem('contacts', JSON.stringify(defaultContactList))

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
