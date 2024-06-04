import LoginForm from '../components/forms/LoginForm.jsx'

import {
    loginPageContainerStyle,
    loginLogoStyle,
    loginFormContainerStyle,
} from './LoginPage.css.js'

function LoginPage() {
    return (
        <>
            <div className={loginPageContainerStyle}>
                <div>
                    <img
                        className={loginLogoStyle}
                        src="./presto.svg"
                        alt="Presto Logo"
                    />
                </div>
                <div className={loginFormContainerStyle}>
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default LoginPage
