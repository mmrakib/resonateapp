import { style } from '@vanilla-extract/css'

export const registerFormStyle = style({
    width: '25%',

    '@media': {
        '(max-width: 768px)': {
            marginTop: '0',
            width: '75%',
        },
    },
})

export const linkContainerStyle = style({
    marginTop: '20px',
})
