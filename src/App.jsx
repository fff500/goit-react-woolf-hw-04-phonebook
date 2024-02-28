import { useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm, ContactsList, ContactsFilter } from './components';

const CONTACTS_STORAGE_ITEM = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(
    () => {
      const savedContacts = JSON.parse(localStorage.getItem(CONTACTS_STORAGE_ITEM));

      if (savedContacts) setContacts(savedContacts);
    },
    []
  );

  useEffect(
    () => localStorage.setItem(CONTACTS_STORAGE_ITEM, JSON.stringify(contacts)),
    [contacts]
  );

  const addContact = useCallback(
    (data) => {
      if (contacts.some(({ name }) => data.name.toLowerCase() === name.toLowerCase())) {
        alert(`${data.name} is already in contacts.`);
        return;
      }

      setContacts((state) => [...state, { ...data, id: nanoid() }]);
    },
    [contacts, setContacts]
  );

  const deleteContact = useCallback(
    (contactId) => setContacts(state => state.filter(({ id }) => id !== contactId)),
    [setContacts]
  );

  const changeFilter = useCallback(
    (filterQuery) => setFilter(filterQuery),
    [setFilter]
  );

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
