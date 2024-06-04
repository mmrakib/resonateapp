import { Container, Header, Icon } from 'semantic-ui-react'

import {
    noPageContainerStyle,
    noPageIconStyle,
    noPageHeaderStyle,
    noPageSubheaderStyle,
} from './NoPage.css.js'

function NoPage() {
    return (
        <Container textAlign="center" className={noPageContainerStyle}>
            <Header as="h1" icon className={noPageHeaderStyle}>
                <Icon name="warning circle" className={noPageIconStyle} />
                404 - Page Not Found
                <Header.Subheader className={noPageSubheaderStyle}>
                    Oops! The page you are looking for does not exist.
                </Header.Subheader>
            </Header>
        </Container>
    )
}

export default NoPage
