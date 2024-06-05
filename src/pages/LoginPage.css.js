import { style } from '@vanilla-extract/css'

export const loginPageContainerStyle = style({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const loginLogoStyle = style({
    height: '250px',
    width: '250px',
})

export const loginFormContainerStyle = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '200px',
})

export const animationContainerStyle = style({
    height: '50%',
    width: '50%',
    marginTop: '10%',
})
