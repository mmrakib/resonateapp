import { style } from '@vanilla-extract/css'

export const loginPageContainerStyle = style({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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

    '@media': {
        '(max-width: 768px)': {
            marginTop: '0',
            height: '75%',
            width: '75%',
        },
    },
})

export const loginMessageStyle = style({
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0',
    padding: '0',
    marginBottom: '3rem',
})
