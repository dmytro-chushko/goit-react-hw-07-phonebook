import { nanoid } from 'nanoid';
import css from './Filter.module.css';

import { IoIosSearch } from 'react-icons/io';

const Filter = ({ onChange }) => {
  const inputFilterId = nanoid();

  return (
    <>
      <label className={css.labelTitle} htmlFor={inputFilterId}>
        <p className={css.labelTitle}>Find contacts by name</p>
        <input
          id={inputFilterId}
          className={css.input}
          type="text"
          onChange={e => onChange(e.currentTarget.value)}
        />
        <IoIosSearch className={css.searchIcon} />
      </label>
    </>
  );
};

export default Filter;
