import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux/es/exports';

import { IoMdPerson } from 'react-icons/io';
import { FaPhone, FaTrashAlt } from 'react-icons/fa';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className={css.item}>
        <IoMdPerson /> {name}: <FaPhone /> {phone}
        {/* <button type="button" onClick={() => dispatch(deleteContact(id))}>
          <FaTrashAlt />
        </button> */}
      </li>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
