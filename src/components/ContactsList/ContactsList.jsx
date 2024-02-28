import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = ({ contacts, deleteContact }) => {
    return (
        <>
            <ul>
                {contacts.map(({ name, number, id }) => {
                    return (
                        <ContactsItem
                            key={id}
                            id={id}
                            name={name}
                            number={number}
                            deleteContact={deleteContact}
                        />
                    )
                })}
            </ul>
        </>
    )
}