import { style } from '@vanilla-extract/css'

export const cardStyle = style({
    margin: '0',
    padding: '0',
    justifySelf: 'center',
    alignSelf: 'center',

    transition: 'box-shadow .3s',
    borderRadius: '10px',
    border: '1px solid #ccc',

    ':hover': {
        boxShadow: '0 0 11px rgba(33,33,33,.2)'
    }
})
