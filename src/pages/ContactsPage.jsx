import { useState, useRef } from 'react'
import Contact from '../components/contacts/Contact.jsx'

import {
    Button,
    Modal,
    Form,
    FormField,
    Input,
} from 'semantic-ui-react'

import {
    contactsGridStyle,
    contactsControlsStyle,
    contactsSearchBarStyle,
    contactsButtonsGroupStyle,
    contactsCreateButtonStyle,
    contactsDeleteButtonStyle,
    createModalFormStyle,
    deleteModalFormStyle
} from './ContactsPage.css.js'

function ContactsPage() {
    const initialContactList = JSON.parse(localStorage.getItem('contacts'))
    const [contactsList, setContactsList] = useState(initialContactList)

    const [createModalIsOpen, setCreateModalIsOpen] = useState(false)
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)

    const [searchTerm, setSearchTerm] = useState('')

    const createModalNameRef = useRef()
    const createModalPhoneRef = useRef()
    const createModalEmailRef = useRef()
    const createModalBirthdayRef = useRef()

    const deleteModalNameRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!createModalNameRef.current.value || !createModalPhoneRef.current.value || !createModalEmailRef.current.value || !createModalBirthdayRef.current.value) {
            alert('Please fill out all the fields.')
            return
        }

        const newContact = {
            name: createModalNameRef.current.value,
            phone: createModalPhoneRef.current.value,
            email: createModalEmailRef.current.value,
            birthday: createModalBirthdayRef.current.value,
        }

        setContactsList(contactsList => [...contactsList, newContact])
        alert('Successfully created contact!')
        setCreateModalIsOpen(false)
    }

    const handleDelete = (e) => {
        e.preventDefault()

        const nameToDelete = deleteModalNameRef.current.value.trim()

        const newContactsList = contactsList.filter(contact => contact.name !== nameToDelete);
        console.log(newContactsList)
        console.log(contactsList)

        if (newContactsList.length === contactsList.length) {
            alert('Contact not found.');
            return
        } else {
            alert('Successfully deleted contact!')
            setContactsList(newContactsList);
        }

        setDeleteModalIsOpen(false)
    }

    return (
        <div>
            <div className={contactsControlsStyle}>
                <Input type='text'
                    className={contactsSearchBarStyle}
                    placeholder='Search...'
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <div className={contactsButtonsGroupStyle}>
                    <Modal
                        size='tiny'
                        onOpen={() => setCreateModalIsOpen(true)}
                        onClose={() => setCreateModalIsOpen(false)}
                        open={createModalIsOpen}
                        trigger={<Button color='blue' className={contactsCreateButtonStyle}>Create</Button>}
                    >
                        <Modal.Header>Create Contact</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <p>Enter the details of the contact you want to create.</p>
                            </Modal.Description>

                            <Form className={createModalFormStyle}>
                                <FormField>
                                    <label>Name</label>
                                    <input ref={createModalNameRef} placeholder='Enter name.' />
                                </FormField>
                                <FormField>
                                    <label>Phone</label>
                                    <input ref={createModalPhoneRef} placeholder='Enter phone.' />
                                </FormField>
                                <FormField>
                                    <label>Email</label>
                                    <input ref={createModalEmailRef} type='email' placeholder='Enter email.' />
                                </FormField>
                                <FormField>
                                    <label>Birthday</label>
                                    <input ref={createModalBirthdayRef} type='birthday' placeholder='Enter birthday.' />
                                </FormField>
                                <div>
                                    <Button onClick={handleSubmit} color='blue'>Submit</Button>
                                    <Button onClick={() => setCreateModalIsOpen(false)}>Close</Button>
                                </div>
                            </Form>
                        </Modal.Content>
                    </Modal>

                    <Modal
                        size='tiny'
                        onOpen={() => setDeleteModalIsOpen(true)}
                        onClose={() => setDeleteModalIsOpen(false)}
                        open={deleteModalIsOpen}
                        trigger={<Button className={contactsDeleteButtonStyle} color='red'>Delete</Button>}
                    >
                        <Modal.Header>Delete Contact</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <p>Enter the exact name of the contact you would like to delete.</p>
                            </Modal.Description>

                            <Form className={deleteModalFormStyle}>
                                <FormField>
                                    <input ref={deleteModalNameRef} placeholder='Enter name.' />
                                </FormField>
                                <div>
                                    <Button onClick={handleDelete} color='red'>Delete</Button>
                                    <Button onClick={() => setDeleteModalIsOpen(false)}>Close</Button>
                                </div>
                            </Form>
                        </Modal.Content>
                    </Modal>
                </div>
            </div>
            <div className={contactsGridStyle}>
                {contactsList.filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase())).map((contact, index) => {
                    return <Contact key={index} contact={contact} />
                })}
            </div>
        </div>
    )
}

export default ContactsPage
