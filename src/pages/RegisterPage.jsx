import RegisterForm from '../components/forms/RegisterForm.jsx'

import {
    registerPageContainerStyle,
    registerLogoStyle,
    registerFormContainerStyle,
} from './RegisterPage.css.js'

function RegisterPage() {
    return (
        <>
            <div className={registerPageContainerStyle}>
                <div>
                    <img
                        className={registerLogoStyle}
                        src="./presto.svg"
                        alt="Presto Logo"
                    />
                </div>
                <div className={registerFormContainerStyle}>
                    <RegisterForm />
                </div>
            </div>
        </>
    )
}

export default RegisterPage
