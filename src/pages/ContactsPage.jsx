import { useState, useRef, useEffect } from 'react'

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
    createModalFormStyle,
    deleteModalFormStyle
} from './ContactsPage.css.js'

function ContactsPage() {
    /* Component state */
    const [contactsList, setContactsList] = useState([])
    const [currentContactId, setCurrentContactId] = useState(0)

    const [createModalIsOpen, setCreateModalIsOpen] = useState(false)
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)

    const [searchTerm, setSearchTerm] = useState('')

    /* JSX references */
    const createModalNameRef = useRef()
    const createModalPhoneRef = useRef()
    const createModalEmailRef = useRef()
    const createModalBirthdayRef = useRef()

    const deleteModalNameRef = useRef()

    /* Random birthday generator */
    const generateBirthday = () => {
        const day = Math.floor(Math.random() * 28) + 1
        const month = Math.floor(Math.random() * 12) + 1
        const year = Math.floor(Math.random() * 50) + 1970

        return `${year}-${month}-${day}`
    }

    /* Fetch contacts from jsonplacholder.typicode.com as required */
    const retrieveInitialContacts = async () => {
        let contactsList = []
    
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
            if (!response.ok) {
                throw new Error('Failed to fetch contacts.')
            }
    
            const data = await response.json()
    
            for (let i = 0; i < data.length; i++) {
                contactsList.push({
                    id: data[i].id,
                    name: data[i].name,
                    phone: data[i].phone.split(' ')[0],
                    email: data[i].email,
                    birthday: generateBirthday(),
                })
            }
        } catch (error) {
            console.error(error)
        }
    
        return contactsList
    }
    
    /* Executes fetch once on component mount */
    useEffect(() => {
        const fetchContacts = async () => {
            const initialContactList = await retrieveInitialContacts()
            setContactsList(initialContactList)
            setCurrentContactId(initialContactList.length + 1)
        }
    
        fetchContacts()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        /* Checks for empty fields */
        if (!createModalNameRef.current.value || !createModalPhoneRef.current.value || !createModalEmailRef.current.value || !createModalBirthdayRef.current.value) {
            alert('Please fill out all the fields.')
            return
        }

        const newContact = {
            id: currentContactId + 1,
            name: createModalNameRef.current.value,
            phone: createModalPhoneRef.current.value,
            email: createModalEmailRef.current.value,
            birthday: createModalBirthdayRef.current.value,
        }

        setContactsList(contactsList => [...contactsList, newContact])
        setCurrentContactId(currentContactId + 1)
        alert('Successfully created contact!')
        setCreateModalIsOpen(false)
    }

    /* Uses provided name to search for contact, deletes if found, error if not */
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

    /* Updates search term on change */
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredContactsList = contactsList.filter(contact => 
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    console.log(filteredContactsList)

    return (
        <div>
            <div className={contactsControlsStyle}>
                <Input 
                    type='text'
                    className={contactsSearchBarStyle}
                    placeholder='Search...'
                    onChange={handleSearchChange}
                />
                <div className={contactsButtonsGroupStyle}>
                    <Modal
                        size='tiny'
                        onOpen={() => setCreateModalIsOpen(true)}
                        onClose={() => setCreateModalIsOpen(false)}
                        open={createModalIsOpen}
                        trigger={<Button color='blue'>Create</Button>}
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
                        trigger={<Button color='red'>Delete</Button>}
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
            {filteredContactsList.map((contact) => (
                <Contact key={contact.id} contact={contact} />
            ))}
            </div>
        </div>
    )
}

export default ContactsPage
