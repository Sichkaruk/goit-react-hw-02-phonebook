import React, { Component } from "react";
import { ContactsList, ContactItem } from "./../ContactList/ContactList.styled";
import { Button } from "./../ContactForm/ContactForm.styled";

class ContactList extends Component {
  render() {
    const { contacts, filter, onDelete } = this.props;
    let filterContacts = contacts;
    if (filter) {
      filterContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter)
      );
    }
    return (
      <ContactsList>
        {filterContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </ContactItem>
        ))}
      </ContactsList>
    );
  }
}

export default ContactList;
