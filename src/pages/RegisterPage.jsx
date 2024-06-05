import { useRef, useEffect } from 'react'
import lottie from 'lottie-web'

import RegisterForm from '../components/forms/RegisterForm.jsx'

import {
    registerPageContainerStyle,
    registerLogoStyle,
    registerFormContainerStyle,
    animationContainerStyle
} from './RegisterPage.css.js'

function RegisterPage() {
    const animationContainer = useRef()
    let animationInstance = useRef(null)

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
            <div className={registerPageContainerStyle}>
                <div className={animationContainerStyle} ref={animationContainer}></div>
                <div className={registerFormContainerStyle}>
                    <RegisterForm />
                </div>
            </div>
        </>
    )
}

export default RegisterPage
