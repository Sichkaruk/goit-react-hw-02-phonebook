import React, { Component } from "react";
import INITIAL_STATE from "./components/data/initial-state.json";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [...INITIAL_STATE],
    filter: "",
  };

  onChangeState = (newContacts) => {
    this.setState(() => ({
      contacts: newContacts,
    }));
  };

  render() {
    const {
      state: { contacts },
      onChangeState,
    } = this;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onChangeState={onChangeState} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
