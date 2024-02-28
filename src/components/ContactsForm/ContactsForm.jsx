import { useState } from 'react';

import style from './ContactsForm.module.css';

export const ContactsForm = ({ addContact }) => {
    const [contact, setContact] = useState({
        name: '',
        number: ''
    })

    const handleChange = (event) => {
        setContact((state) => ({ ...state, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addContact(contact);
        setContact({
            name: '',
            number: ''
        });
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id='name'
                type="text"
                name="name"
                pattern="[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={contact.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="number">Namber</label>
            <input
                id='number'
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={contact.number}
                onChange={handleChange}
                required
            />
            <button type="submit">Add contact</button>
        </form>
    )
}
