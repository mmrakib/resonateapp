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

        if (email === '' || password === '') {
            alert('Please enter all fields')
            return
        }

        // NOTE: This is a mock login page. The security is abysmal.
        if (email == 'exampleuser12345' && password == 'resonaterocks!') {
            navigate('/dashboard')
            alert('Successfully logged in!')
        } else {
            alert('Error while logging in.')
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
