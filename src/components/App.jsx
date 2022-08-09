import { useState } from 'react';
import css from './App.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const [filter, setFilter] = useState('');

  const handleChangeFilter = filter => {
    setFilter(filter);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter onChange={handleChangeFilter} />
      <ContactList filter={filter} />
    </div>
  );
};

export default App;
