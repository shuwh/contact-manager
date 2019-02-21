import React, { Component } from 'react'
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

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </div>
    )
  }
}

export default Contacts
