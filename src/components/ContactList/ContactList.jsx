import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import css from './ContactList.module.css';
import { getVisibleContacts } from 'helpers/getVisibleContacts';

import ContactItem from 'components/ContactItem';

const ContactList = ({ filter }) => {
  const contacts = useSelector(contactsSelectors.getContactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={css.list}>
        {getVisibleContacts(filter, contacts).map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default ContactList;
