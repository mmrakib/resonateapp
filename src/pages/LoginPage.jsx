import LoginForm from '../components/forms/LoginForm.jsx'
import StaggerVisualizer from '../components/visuals/StaggerVisualizer.jsx'

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
                    <StaggerVisualizer />
                </div>
                <div className={loginFormContainerStyle}>
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default LoginPage
