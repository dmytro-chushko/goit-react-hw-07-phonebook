import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { contactsSelectors } from 'redux/contacts';

import { IoMdPerson, IoMdPersonAdd } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';

const ContactForm = () => {
  const { getContactsSelector } = contactsSelectors;
  const contacts = useSelector(getContactsSelector);
  const dispatch = useDispatch();
  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const normalizeName = name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizeName)
    ) {
      Notify.failure('This name allready added');
      form.reset();
      return;
    }

    const number = form.elements.number.value;
    const id = nanoid();

    // dispatch(addContacts({ id, name, number }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={inputNameId}>
        <p className={css.labelTitle}>Name</p>
        <IoMdPerson className={css.icon} />
        <input
          id={inputNameId}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label} htmlFor={inputNumberId}>
        <p className={css.labelTitle}>Number</p>
        <FaPhone className={css.icon} />
        <input
          id={inputNumberId}
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        <IoMdPersonAdd className={css.buttonIcon} size={16} />
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
