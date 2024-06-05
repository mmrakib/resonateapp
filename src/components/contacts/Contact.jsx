import { useState } from 'react' 

import {
    Modal,
    Form,
    FormField,
    CardHeader,
    CardContent,
    Card,
    Image,
    Button,
    Icon
} from 'semantic-ui-react'

import {
    cardStyle
} from './Contact.css.js'

function Contact({ contact }) {
    const [name, setName] = useState(contact.name)
    const [phone, setPhone] = useState(contact.phone)
    const [email, setEmail] = useState(contact.email)
    const [birthday, setBirthday] = useState(contact.birthday)

    /* Toggle boolean for modal */
    const [editOpen, setEditOpen] = useState(false)

    return (
    <>
        <Card className={cardStyle}>
            <Image src='/greyavatar.jpg' wrapped ui={false} />
            
            <CardContent>
                <CardHeader>{name}</CardHeader>
            </CardContent>
            <CardContent extra>
                <Icon name='phone' />
                {phone}
            </CardContent>
            <CardContent extra>
                <Icon name='mail' />
                {email}
            </CardContent>
            <CardContent extra>
                <Icon name='birthday cake' />
                {birthday}
            </CardContent>

            <Modal
                onOpen={() => setEditOpen(true)}
                onClose={() => setEditOpen(false)}
                open={editOpen}
                trigger={<Button size='small'>Edit</Button>}
            >
                <Modal.Header>Edit Contact</Modal.Header>
                <Modal.Content>
                    <Form>
                        <FormField>
                            <label>Name</label>
                            <input placeholder='Enter name.' value={name} onChange={e => setName(e.target.value)}/>
                        </FormField>
                        <FormField>
                            <label>Phone</label>
                            <input placeholder='Enter phone.' value={phone} onChange={e => setPhone(e.target.value)} />
                        </FormField>
                        <FormField>
                            <label>Email</label>
                            <input type='email' placeholder='Enter email.' value={email} onChange={e => setEmail(e.target.value)}/>
                        </FormField>
                        <FormField>
                            <label>Birthday</label>
                            <input type='birthday' placeholder='Enter birthday.' value={birthday} onChange={e => setBirthday(e.target.value)} />
                        </FormField>
                        <Button onClick={() => setEditOpen(false)}>Save</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </Card>
    </>
    )
}

export default Contact
