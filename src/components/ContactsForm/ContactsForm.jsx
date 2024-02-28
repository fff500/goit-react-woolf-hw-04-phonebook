import { Component } from 'react';

import style from './ContactsForm.module.css';

export class ContactsForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addContact(this.state);
        this.setState({
            name: '',
            number: ''
        });
    }

    render() {
        return (
            <form className={style.form} onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id='name'
                    type="text"
                    name="name"
                    pattern="[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                    required
                />
                <label htmlFor="number">Namber</label>
                <input
                    id='number'
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={this.state.number}
                    onChange={this.handleChange.bind(this)}
                    required
                />
                <button type="submit">Add contact</button>
            </form>
        )
    }
}
