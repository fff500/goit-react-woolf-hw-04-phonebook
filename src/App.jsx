import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm, ContactsList, ContactsFilter } from './components';

const CONTACTS_STORAGE_ITEM = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem(CONTACTS_STORAGE_ITEM)) || []);
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem(CONTACTS_STORAGE_ITEM, JSON.stringify(contacts)),
    [contacts]
  );

  const addContact =
    (data) => {
      if (contacts.some(({ name }) => data.name.toLowerCase() === name.toLowerCase())) {
        alert(`${data.name} is already in contacts.`);
        return;
      }

      setContacts((state) => [...state, { ...data, id: nanoid() }]);
    };

  const deleteContact = (contactId) => setContacts(state => state.filter(({ id }) => id !== contactId));

  const changeFilter = (filterQuery) => setFilter(filterQuery);

  const filterContacts = () => (
    contacts.filter(({ name }) => name.toLowerCase().includes(filter))
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm addContact={addContact} />

      <h2>Contacts</h2>
      <ContactsFilter changeFilter={changeFilter} />
      <ContactsList
        contacts={filterContacts()}
        deleteContact={deleteContact}
      />
    </>
  );
}
