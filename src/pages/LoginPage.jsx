import { useRef, useEffect } from 'react'
import lottie from 'lottie-web'

import LoginForm from '../components/forms/LoginForm.jsx'

import {
    loginPageContainerStyle,
    loginMessageStyle,
    loginFormContainerStyle,
    animationContainerStyle
} from './LoginPage.css.js'

function LoginPage() {
    const animationContainer = useRef()
    let animationInstance = useRef(null)

    /* Lottie animation */
    useEffect(() => {
        animationInstance.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/productivitylottie.json'
        });

        return () => {
            animationInstance.current.destroy()
        }
      }, []);

    return (
        <>
            <div className={loginPageContainerStyle}>
                <div className={animationContainerStyle} ref={animationContainer}>
    
                </div>

                <p className={loginMessageStyle}>A productivity app to keep everyone. Together.</p>

                <div className={loginFormContainerStyle}>
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default LoginPage
