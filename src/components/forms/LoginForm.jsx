import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, FormField, Button } from 'semantic-ui-react'

import { loginFormStyle, linkContainerStyle } from './LoginForm.css.js'

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name === 'email') setEmail(value)
        if (name === 'password') setPassword(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        /* Check for empty fields */
        if (email === '' || password === '') {
            alert('Please enter all fields')
            return
        }

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        /* This is a mock login page. The security is abysmal, and the 'backend' can only store one user at a time. */
        if (email == storedEmail && password == storedPassword) {
            navigate('/contacts')
            alert('Successfully logged in!')
        } else {
            alert('Wrong username and/or password')
        }
    }

    return (
        <Form className={loginFormStyle} onSubmit={handleSubmit}>
            <FormField>
                <label>Email</label>
                <input
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={handleInputChange}
                />
            </FormField>
            <FormField>
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Enter password"
                    onChange={handleInputChange}
                />
            </FormField>
            <Button type="submit">Submit</Button>
            <div className={linkContainerStyle}>
                <Link to="/register">
                    Don&apos;t have an account? Register here.
                </Link>
            </div>
        </Form>
    )
}

export default LoginForm
