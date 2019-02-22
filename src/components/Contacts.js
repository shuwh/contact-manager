import React, { Component, Fragment } from 'react'
import Contact from './Contact'

export class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '111-111-1111',
        },
        {
          id: 2,
          name: 'Karen Williams',
          email: 'karen@yahoo.com',
          phone: '222-222-2222',
        },
        {
          id: 3,
          name: 'Will Winter',
          email: 'will@gmail.com',
          phone: '333-333-3333',
        },
      ]
    }
  }

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => {
      return contact.id !== id;
    })
    this.setState({ contacts: newContacts })
  }


  render() {
    const { contacts } = this.state;
    return (
      <Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={() => this.deleteContact(contact.id)}
          />
        ))}
      </Fragment>
    )
  }
}

export default Contacts
