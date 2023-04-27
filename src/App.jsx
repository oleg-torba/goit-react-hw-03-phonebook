import React, { Component } from 'react';
import { Form } from './Components/Form/Form';
import { Section } from './Components/Section/Section';
import { nanoid } from 'nanoid';
import { ContactList } from './Components/ContactList/ContactList';
import { Filter } from './Components/Filter/FilterContacts';
import { Notification } from './Components/Notification/Notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storage);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmit = data => {
    const findDublicate = this.state.contacts.some(
      contact => contact.data.name.toLowerCase() === data.name.toLowerCase()
    );

    if (findDublicate) {
      alert(`${data.name} already exsist`);
      return;
    }
    const numbers = {
      id: nanoid(),
      data,
    };

    this.setState(({ contacts }) => ({
      contacts: [numbers, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.data.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          {contacts.length > 0 ? (
            <ContactList
              contacts={visibleContacts}
              removeContact={this.deleteContact}
            />
          ) : (
            <Notification message="There are no contacts" />
          )}
        </Section>
      </>
    );
  }
}
