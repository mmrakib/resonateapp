import { style } from '@vanilla-extract/css'

export const contactsControlsStyle = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column'
        },
    },
})

export const contactsSearchBarStyle = style({
    marginTop: '5rem',
    marginRight: '3rem',

    '@media': {
        '(max-width: 768px)': {
            marginRight: '0'
        },
    },
})

export const contactsButtonsGroupStyle = style({
    marginTop: '5rem',

    '@media': {
        '(max-width: 768px)': {
            marginTop: '1rem'
        },
    },
})

export const contactsCreateButtonStyle = style({

})

export const contactsDeleteButtonStyle = style({

})

export const contactsGridStyle = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    margin: '7rem',
    marginTop: '3rem',
    gap: '0',

    '@media': {
        '(max-width: 768px)': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '3rem'
        },
    },
})

export const createModalFormStyle = style({
    marginTop: '1rem'
})

export const deleteModalFormStyle = style({
    marginTop: '1rem'
})
