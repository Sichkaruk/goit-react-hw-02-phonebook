import React, { Component } from "react";

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    const filterContacts = contacts;
    if (filter) {
      filterContacts = contacts.filter(({ name }) =>
        name.toUpperCase().includes(filter)
      );
    }
    return (
      <ul>
        {filterContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
