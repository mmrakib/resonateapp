import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, FormField, Button } from 'semantic-ui-react'

import { registerFormStyle, linkContainerStyle } from './RegisterForm.css.js'

function RegisterForm() {
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const validateForm = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match!')
            throw new Error('Passwords do not match')
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name === 'email') setEmail(value)
        if (name === 'fullname') setFullname(value)
        if (name === 'password') setPassword(value)
        if (name === 'confirmPassword') setConfirmPassword(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        /* Form validation */
        try {
            validateForm()
        } catch (error) {
            console.log(error)
            return
        }

        /* Check for empty fields */
        if (
            email === '' ||
            fullname === '' ||
            password === '' ||
            confirmPassword === ''
        ) {
            alert('Please enter all fields')
            return
        }

        /* This is a mock register page. The security is abysmal, and the 'backend' can only store one user at a time */
        localStorage.setItem('email', email);
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('password', password);

        navigate('/login')
        alert('Sucessfully registered!')
    }

    return (
        <Form className={registerFormStyle} onSubmit={handleSubmit}>
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
                <label>Name</label>
                <input
                    name="fullname"
                    type="text"
                    value={fullname}
                    placeholder="Enter name"
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
            <FormField>
                <label>Confirm Password</label>
                <input
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    placeholder="Re-enter passowrd"
                    onChange={handleInputChange}
                />
            </FormField>
            <Button type="submit">Submit</Button>
            <div className={linkContainerStyle}>
                <Link to="/login">Already have an account? Log in here.</Link>
            </div>
        </Form>
    )
}

export default RegisterForm
